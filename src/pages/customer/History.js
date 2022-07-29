import React from "react"; //react
//====Importing Components====
import History from "../../components/customer/Customer/HistoryDetails";

function CustomerPage() {
  return (
    <div
      style={{
        // background: `url(${Img03})`,
        background: "#D6EEF8",
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
