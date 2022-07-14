/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import PackageService from "../../service/PackageService";
import TestDemo from "../../components/package_delivery_requests/TestDemo";
import { useState } from "react";
import ContentLayout from "../../components/common/ContentLayout";

export default function PackageDeliveryRequests() {
  const [loading, setLoading] = useState(false);
  const [deliveryRequests, setDeliveryRequests] = useState([]);

  const packageService = new PackageService();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const deliveryRequests =
        await packageService.findPackageDeliveryRequests();
      console.log(deliveryRequests.data);
      setDeliveryRequests(deliveryRequests.data);
      setLoading(false);
    };
    getData();
  },[]);

  return (
    <ContentLayout
      header="Package Delivery Requests"
      title="Package Delivery Requests"
      loading={loading}
      Component={<TestDemo deliveryRequests={deliveryRequests} />}
    />
  );
}
