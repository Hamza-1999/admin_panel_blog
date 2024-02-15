import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { lazy, useState, useEffect } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Stack, Select, MenuItem, TextField, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import Config from 'src/config/Config';

export const EditorComponent = lazy(() => import('src/components/EditorComponent'));

export default function EditBlog() {
  const router = useRouter();
  const { id } = useParams();
  const [heading, setHeading] = useState('');
  const [image, setImage] = useState([]);
  const [mainContent, setMainContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [metaTittle, setMetaTittle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [categories, setCategories] = useState([]);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    setImage([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleClick = async () => {
    if (heading && slug) {
      const formData = new FormData();
      formData.set('name', heading);
      if (image.length > 0) {
        formData.set('image', image);
      }
      formData.set('mainContent', mainContent);
      formData.set('user', JSON.parse(localStorage.getItem('user'))?._id);
      // formData.set('categoryIdList' , JSON.stringify(categories.find((v)=> v._id === selectedCategory)?.keys))
      formData.set('category', selectedCategory);
      formData.set('metaTittle', metaTittle);
      formData.set('slug', slug.replaceAll(' ', '_'));
      formData.set('metaDescription', metaDescription);
      try {
        const response = await axios.post(`${Config.apiUrl}/editblog/${id}`, formData, {
          headers: {
            token: `${localStorage.getItem('token')}`,
          },
        });
        if (response.status === 200) {
          toast.success('Blog updated successfully', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          router.push('/blog');
        }
      } catch (error) {
        console.log('error', error);
      }
    } else {
      window.alert('Please Fill Heading or Slug');
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Config.apiUrl}/categories`);
      console.log('response?.data?.category', response?.data?.category);
      setCategories(response?.data?.category);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
    const getBlog = async () => {
      try {
        const response = await axios.get(`${Config.apiUrl}/getBlog/${id}`);
        console.log('response', response.data.data);
        setHeading(response.data.data?.name);
        setMainContent(response.data.data?.mainContent);
        setSelectedCategory(response.data.data?.category);

        setMetaTittle(response.data.data?.metaTittle);
        setMetaDescription(response.data.data?.metaDescription);
        setSlug(response.data.data?.slug);
      } catch (error) {
        console.log(error);
      }
    };
    getBlog();
  }, [id]);

  return (
    <>
      <Helmet>
        <title> Edit Blog </title>
      </Helmet>

      {/* <BlogView /> */}
      <Box sx={{ margin: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4"> Edit Blog </Typography>
          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            color="info"
            onClick={handleClick}
          >
            Update
          </LoadingButton>
        </Box>

        <Box>
          <Stack
            sx={{
              padding: '13px 0px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              size="small"
              sx={{ width: '65%' }}
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              name="email"
              label="Heading"
            />
            {console.log('selectedCategory', selectedCategory)}
            <Select
              size="small"
              sx={{ width: '32%' }}
              value={selectedCategory}
              onChange={(e) => {
                console.log('e', e.target.value);
                setSelectedCategory(e.target.value);
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {categories.length > 0 &&
                categories.map((v) => <MenuItem value={v._id}>{v?.name}</MenuItem>)}
            </Select>
          </Stack>
          <Stack
            sx={{
              padding: '13px 0px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              size="small"
              sx={{ width: '32%' }}
              value={metaTittle}
              onChange={(e) => setMetaTittle(e.target.value)}
              name="metaTitle"
              label="Meta Tittle"
            />
            <TextField
              size="small"
              sx={{ width: '32%' }}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              name="metaDescription"
              label="Meta Description"
            />
            <TextField
              size="small"
              sx={{ width: '32%' }}
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              name="slug"
              label="Slug"
            />
          </Stack>
          <Box sx={{ padding: '13px 0px' }}>
            <Typography variant="h6">Image</Typography>
            <input type="file" onChange={handleImage} />
          </Box>
        </Box>
        <Box>
          <EditorComponent mainContent={mainContent} setMainContent={setMainContent} />
        </Box>
      </Box>
    </>
  );
}
