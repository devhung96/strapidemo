/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { SettingsPageTitle } from "@strapi/helper-plugin";
import {
  HeaderLayout,
  Layout,
  ContentLayout,
} from "@strapi/design-system/Layout";
import { Main } from "@strapi/design-system/Main";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system";

import { Typography } from "@strapi/design-system";
const ROW_COUNT = 4;
const COL_COUNT = 1;
const entry = {
  version: "v1.0.0",
  description: "Cập nhật phần nội dung bài viết #123123",
  createdAt: "05-03-2023",
};

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      var result = [...entries];
      for (let i = 0; i < 5; i++) {
        result = [...result, { ...entry, id: i + 1 }];
      }
      console.log(result);
      return result;
    };
    setEntries(await fetchData());
  }, []);
  return (
    <Layout>
      <SettingsPageTitle name="App Version" />
      <Main>
        <HeaderLayout title="App Version" subtitle="" />
      </Main>
      <ContentLayout>
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
          <Thead>
            <Tr>
              <Th>
                <Typography variant="sigma">STT</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Version</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Description</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">CreatedDate</Typography>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {entries.map((entry) => (
              <Tr key={entry.id}>
                <Td>
                  <Typography textColor="neutral800">{entry.id}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.version}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {entry.createdAt}
                  </Typography>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
