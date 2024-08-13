"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiInbox, HiLogout, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import pic from "../src/assets/logo-no-background.svg";
import './sidebar.css'; // Import custom styles
import React,{useContext} from "react";
import { AuthContext } from "../src/contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export function Slidebar() {
  const {logout}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handlelogout = ()=>{
   logout().then(()=>{
    alert("signed out");
    navigate(from, { replace: true });
   }).catch((err)=>{})
  }
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="custom-sidebar">
      <Sidebar.Logo href="/" img={pic} imgAlt="Flowbite logo" className="logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books 
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          
         
          <Sidebar.Item href="/shop" icon={HiBookOpen}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/sign-up" icon={HiArrowSmRight}>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Slidebar;
