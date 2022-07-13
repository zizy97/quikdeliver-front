/* eslint-disable no-unused-vars */
import React from "react";
import PackageService from "../../service/PackageService";
import TestDemo from "../../components/package_delivery_requests/TestDemo";
import { useState } from "react";
import ContentLayout from "../../components/common/ContentLayout";

export default function PackageDeliveryRequests() {
  const [loading, setloading] = useState(false);
  const [deliveryRequests, setdeliveryRequests] = useState([]);

  const deliveries =[
    {
      id: "OR45612",
      customer:{
        id:1,
        customerName: "Supun Tharuka",
      },
      deliveryFee: 100.00,
      pickupDate: "2022-02-05",
      pickupAddress: "Horana",
      dropOffAddress: "Matara",
      status: "ADMIN_APPROVED",
      allocated:true,
      paymentProofLinkUsed:true
    }
  ]

  return (
    <ContentLayout
      header="Package Delivery Requests"
      title="Package Delivery Requests"
      loading={loading}
      Component={<TestDemo deliveryRequests={deliveries} />}
    />
  );
}
