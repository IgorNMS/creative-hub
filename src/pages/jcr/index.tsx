import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Redirect() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffect(() => {
    window.location.href = customFields.linkRedirect.toString();
  }, []);

  return <p>Redirecting...</p>;
}
