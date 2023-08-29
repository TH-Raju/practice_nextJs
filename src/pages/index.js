import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import RootLayout from '@/components/RootLayout';
import Head from 'next/head';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="This is next home page"></meta>
      </Head>
      <h1>This is Home page</h1>
    </div>
  )
};
export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}