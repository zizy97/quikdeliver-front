import React from "react"; //react
//====Importing Components====
import History from "../../components/customer/Customer/HistoryDetails";

function CustomerPage() {
  return (
    <div
      style={{
        // background: `url(${Img03})`,
        background: "#E9EAEC",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <History />
    </div>
  );
}

export default CustomerPage;
