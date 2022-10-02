import { FC } from "react";
import { Content, LeftSidebar, Main, PageLayout } from "@atlaskit/page-layout";
import {
  NavigationHeader,
  SideNavigation,
  Header,
  Footer,
  NavigationContent,
  NavigationFooter,
} from "@atlaskit/side-navigation";
import ActivityIcon from "@atlaskit/icon/glyph/activity";
import { MenuGroup, Section, CustomItem } from "@atlaskit/menu";
import { NavLink } from "react-router-dom";
import css from "@emotion/css";
import { colors } from "@atlaskit/theme";

const navItemCss = css`
  &.active:visited {
    color: ${colors.B300};
    background-color: ${colors.B50};
  }
`;

export const Dashboard: FC = () => {
  return (
    <PageLayout>
      <Content>
        <LeftSidebar>
          <SideNavigation label="dashboard">
            <NavigationHeader>
              <Header iconBefore={<ActivityIcon label="" />}>
                Cost calculator
              </Header>
            </NavigationHeader>
            <NavigationContent>
              <MenuGroup>
                <Section>
                  <CustomItem
                    css={navItemCss}
                    isSelected
                    component={NavLink}
                    to="/"
                  >
                    Dashboard
                  </CustomItem>
                </Section>
              </MenuGroup>
            </NavigationContent>
            <NavigationFooter>
              <Footer description="Made by Andrew Smelov">
                <a href="https://github.com/smelovandrew">Github</a>
              </Footer>
            </NavigationFooter>
          </SideNavigation>
        </LeftSidebar>
        <Main>Hello world!</Main>
      </Content>
    </PageLayout>
  );
};
