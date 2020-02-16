import { Layout, Menu, Icon, Card } from "antd";
// import NavHeader from "./NavHeader/NavHeader";
import NavHeader from "./NavHeader/NavHeader.jsx";
import React from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import PageError from "./PageError.jsx";
import FooterContent from "./FooterContent/FooterContent.jsx";
const { Header, Content, Sider, Footer } = Layout;

export default function PageLayout({ children, isSplash, isWeb }) {
  return (
    <div className="page">
      {!isSplash ? (
        <Layout className="layout">
          {/* If this is running on the web */}
          <Header>
            <NavHeader />
          </Header>
          <Content>
            <ErrorBoundary errorUI={<PageError />}>
              <div className="margin">
                <Card>{children}</Card>
              </div>
            </ErrorBoundary>
          </Content>
          <FooterContent style={{ justifyContent: "center" }} />
        </Layout>
      ) : (
        <Layout className="layout">
          {/* If this is running on the web */}
          <Header>
            <NavHeader />
          </Header>
          <ErrorBoundary errorUI={<PageError />}>{children}</ErrorBoundary>
          <FooterContent style={{ justifyContent: "center" }} />
        </Layout>
      )}
    </div>
  );
}
