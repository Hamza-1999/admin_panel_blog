import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Collapse, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { ExpandLess, ExpandMore, Wallet } from "@mui/icons-material";
import Claim from "../claim-dir/claim/Claim";
import sideBarCover from '../../assets/siderbar.png'
import userBackground from '../../assets/background.png'
import userImg from '../../assets/user.png'
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isChartsOpen, setIsChartsOpen] = useState(false);
  const [isCustomSetupOpen, setIsCustomSetupOpen] = useState(false);
  const [isClaimOpen, setIsClaimOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <Box
      sx={{
        boxShadow:" 7px 0px 19px 0px #00000026",
        backgroundColor:"#F2F6FC",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu style={{ padding: "0px" }} iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Box sx={{
            backgroundImage: `url(${sideBarCover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: '10px 10px 10px 10px',
            borderRadius: "0px 0px 29px 29px"
          }}>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                // margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  backgroundColor="#F2F6FC "
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  pl="9px"
                  borderRadius={"10px"}
                >
                  <Typography fontSize={"18px"} variant="h3" color={colors.grey[100]}>
                    Admin
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px" mt={"5px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <Box display="flex" justifyContent="center" alignItems="center"
                  sx={
                    {
                      backgroundImage: `url(${userBackground})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      padding:"3px 0px 0px 1px",
                      // width:"102px",
                      // height:"102px"
                      alignItems:'center'
                    }
                  }
                >
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={userImg}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Ariz
                  </Typography>
                  <Typography variant="h5" color={"#216FED"}>
                    IT Dep
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "4px"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsPatientOpen(!isPatientOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Patient
              </Typography>
              {isPatientOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>

            <Collapse in={isPatientOpen}>
              {/* <Item
                title="Manage Account"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Patient Information"
                to="/patient"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
              <Item
                title="Create Patient"
                to="/createpatient"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Manage Patient"
                to="/managepatient  "
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Payment Plans"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Collapse>

            {/* claims */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsClaimOpen(!isClaimOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Claim
              </Typography>
              {isClaimOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={isClaimOpen}>
              <Item
                title="Claim"
                to="/claims"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Provider"
                to="/provider"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Collapse>

            {/* payment */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsPaymentOpen(!isPaymentOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Payment
              </Typography>
              {isPaymentOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={isPaymentOpen}>
              <Item
                title="Payment"
                to="/payment"
                icon={<Wallet />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Provider"
                to="/provider"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Collapse>

            {/* Custom Setup */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsCustomSetupOpen(!isCustomSetupOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Custom Setup
              </Typography>
              {isCustomSetupOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={isCustomSetupOpen}>
              <Item
                title="Practice"
                to="/practice"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Provider"
                to="/provider"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsPagesOpen(!isPagesOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              {isPagesOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={isPagesOpen}>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Appointments"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse>

            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setIsChartsOpen(!isChartsOpen)}
            >
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              {isChartsOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={isChartsOpen}>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Collapse> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
