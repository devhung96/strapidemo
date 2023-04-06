/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { ContentLayout, Layout } from "@strapi/design-system";
import { BaseHeaderLayout, HeaderLayout } from "@strapi/design-system";
import { Breadcrumbs, Crumb } from "@strapi/design-system";
import { Typography } from "@strapi/design-system";
import { Box } from "@strapi/design-system";
import { EmptyStateLayout } from "@strapi/design-system";
import Cross from "@strapi/icons/Cross";
import { Button } from "@strapi/design-system";
import Plus from "@strapi/icons/Plus";
const HomePage = () => {
  const [toodo, setTodo] = useState([]);
  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Import & export"
          subtitle={
            <Breadcrumbs label="folders">
              <Crumb>Import & export</Crumb>
              <Crumb>Detail</Crumb>
            </Breadcrumbs>
          }
          as="h2"
        />
        <ContentLayout>
          {toodo.length === 0 ? (
            <Box padding={8} background="neutral100">
              <EmptyStateLayout
                icon={<Cross />}
                content="You don't have any content yet..."
                action={
                  <Button variant="secondary" startIcon={<Plus />}>
                    Create your first content-type
                  </Button>
                }
              />
            </Box>
          ) : (
            <Typography>
              An infinite amount of content to place correctly the tooltip.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          )}
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default HomePage;
