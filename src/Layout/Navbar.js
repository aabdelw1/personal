import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import { Navbar, Alignment } from "@blueprintjs/core";
import { ThemeToggle, Typography } from "../components/primitives";
import { ThemeProvider } from "../Layout";
import { useMediaQuery } from "react-responsive";
import AmmarSticker from "../assets/img/ammar-sticker-plain.png";

const Container = styled(Navbar)`
	&& {
		box-shadow: ${({ boxshadow }) => boxshadow};
		/* background: ${({ theme }) => theme.grey_6}; */
		background:black;
		padding: 1.2rem 2rem 4rem ;		
	}
`;
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 67rem;
  display: flex;
  justify-content: space-between;
  display: flex;
  @media (max-width: 1140px) {
    width: unset;
  }
`;

const NavLinks = styled.div`
  display: flex;
  /* margin-bottom: auto; */
  a {
    text-decoration: none;
  }
`;

const ThemedLink = styled(Link)`
	transition: opacity 0.2s;
	&& {
		* {
			/* color: ${({ theme }) => theme.grey}; */
		color: white;
		font-size: 18px;
		margin-left:1rem;
		}
	} 
	:hover{
		opacity: ${(props) => props.isActive};
	}
`;

const ThemedName = styled(Link)`
		&& {
		* {
			/* color: ${({ theme }) => theme.grey}; */
		color: white;
		font-size: 18px;
		margin-left:1rem;
		}
	} 
		transition: opacity 0.2s;
	:hover{
		opacity: 0.5;
		text-decoration: none;

	}
`;

const Pane = styled.div`
	/* padding: 1rem 0; */
	/* background: orange; */
	/* margin-right: ${(props) => props.marginRight}; */
`;

const NavbarLinks = [
  // { name: 'home', link: '/' },
  { name: "about", link: "/about" },
  { name: "portfolio", link: "/portfolio" },
  { name: "resume", link: "https://read.cv/aabdelw1" },
  { name: "contact", link: "/contact" },
];

const _ = ({ page, fixed, ...props }) => {
  const { theme: themeCtx } = useContext(ThemeProvider.Context);
  // const setTheme = themeCtx[1]
  const isBrowser = typeof window !== "undefined";
  const pageName =
    isBrowser && window.location.pathname.replace(/[^0-9a-z]/gi, "");
  const isTablet = useMediaQuery({ maxWidth: 992 });
  return (
    <Container {...props} fixedToTop={fixed}>
      <MiddleConsole>
        <Navbar.Group align={Alignment.LEFT}>
          <Pane marginLeft="2rem">
            <ThemedName to="/home">
              <Typography weight={"medium"}>Ammar Abdelwahed</Typography>
              {/* <img src={AmmarSticker} /> */}
            </ThemedName>
          </Pane>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT} className="pl-4">
          <Pane marginRight={isTablet ? "0rem" : "2rem"}>
            <NavLinks>
              {NavbarLinks.map(({ name, link }, i) => (
                <ThemedLink
                  key={i}
                  to={link}
                  target="_blank"
                  isActive={pageName !== name ? "0.5" : "1"}
                >
                  <Typography
                    className="px-2"
                    opacity={pageName === name ? "hover" : "normal"}
                  >
                    {name}
                  </Typography>
                </ThemedLink>
              ))}
            </NavLinks>
          </Pane>
          {/* <ThemeToggle className="ml-4" onChange={() => setTheme(lastThemeType => (
					lastThemeType === 'light' ? 'dark' : 'light'
				))} /> */}
        </Navbar.Group>
      </MiddleConsole>
    </Container>
  );
};
_.propTypes = {
  page: PropTypes.string,
  /** Specifies whether positioning should be fixed or relative */
  fixed: PropTypes.bool,
  background: PropTypes.string,
  boxshadow: PropTypes.string,
};
_.defaultProps = {
  background: "#FFF",
  boxshadow:
    "0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.1);",
};

export default _;
