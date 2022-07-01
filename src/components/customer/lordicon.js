import React from "react";

function lordicon() {
  return (
    <div>
      {/* ===Loading Icon=== */}
      <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
      <lord-icon
        src="https://cdn.lordicon.com/xjovhxra.json"
        trigger="loop"
        colors="primary:#4030e8,secondary:#e8e230"
        stroke="25"
        style={{ width: "100px", height: "100px" }}
      ></lord-icon>
      {/* ===Loading Icon=== */}
    </div>
  );
}

export default lordicon;
