/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DriverService from "../../service/DriverService";
import { useNavigate } from "react-router-dom";
import { AddUserIcon } from "../../components/common/icons/Icons";
import { Tooltip } from "@mui/material";
import DriverListTest from "../../components/driver/DriverListTest";
import ContentLayout from "../../components/common/ContentLayout";

export default function Drivers() {
  const navigate = useNavigate();
  const driverService = new DriverService();
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      const getData = async() => {
        setLoading(true);
        const drivers = await driverService.getDrivers();
        setDrivers(drivers.data);
        setLoading(false);
      }
      getData();
  });

  return (
    <ContentLayout
      header="Drivers"
      title="Drivers"
      loading={loading}
      Component={<DriverListTest drivers={drivers} />}
      TitleComponent={
        <Tooltip title="Add Driver">
          <Button
            onClick={() => {
              navigate("/admin/drivers/new");
            }}
            size="small"
          >
            <AddUserIcon width="40" height="40" />
          </Button>
        </Tooltip>
      }
    />
  );
}
