import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header, Toasts } from '.';

const Shell = () => (
  <AppShell header={<Header />}>
    <Outlet />
    <Toasts />
  </AppShell>
);

export default Shell;
