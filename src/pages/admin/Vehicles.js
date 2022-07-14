/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import VehicleService from "../../service/VehicleService";
import { Link } from "react-router-dom";
import { AddVehicleIcon } from "../../components/common/icons/Icons";
import { Tooltip } from "@mui/material";
import VehicleTestList from "../../components/vehicles/VehicleTestList";
import ContentLayout from "../../components/common/ContentLayout";

export default function Vehicles() {
  const vehicleService = new VehicleService();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      const getData = async() => {
        setLoading(true);
        const vehicles = await vehicleService.getVehicles();
        setVehicles(vehicles.data);
        setLoading(false);
      }
      getData();
  },[]);
  return (
    <ContentLayout
      header="Vehicles"
      title="Vehicles"
      loading={loading}
      Component={<VehicleTestList vehicles={vehicles} />}
      TitleComponent={
        <Tooltip title="Add Vehicle">
          <Button component={Link} to={"/admin/vehicles/new"} size="small">
            <AddVehicleIcon width="40" height="40" />
          </Button>
        </Tooltip>
      }
    />
  );
}
