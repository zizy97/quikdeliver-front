import React, { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";
import TestDemo from "../../components/package_delivery_requests/TestDemo";
import ContentLayout from "../../components/common/ContentLayout";

export default function OngoingDeliveries() {
  const packageService = new PackageService();

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const deliveryPackageRes =
        await packageService.findOngoingPackageDeliveryRequests();
      console.log(deliveryPackageRes.data);
      const deliveryPackageDrop = deliveryPackageRes.data.map((delivery) => {
        return {
          ...delivery,
          label: delivery.id,
        };
      });
      console.log(deliveryPackageDrop);
      setDeliveries(deliveryPackageDrop);
      setLoading(false);
    };
    getData();
  });

  return (
    <ContentLayout
      header="Ongoing Deliveries"
      title="Dashboard Ongoing Deliveries"
      loading={loading}
      Component={<TestDemo deliveryRequests={deliveries} />}
    />
  );
}
