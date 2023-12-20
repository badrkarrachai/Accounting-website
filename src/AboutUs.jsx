import React, { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "Aarab Rachid - À propos de nous"; // Change this to whatever title you want
  }, []);
  return <div>AboutUs</div>;
}
