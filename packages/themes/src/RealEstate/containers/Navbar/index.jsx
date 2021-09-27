import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-scroll';
import { smoothLinkProps } from '@pagerland/common/src/utils';

import Container from '@pagerland/common/src/components/Container';
import Box from '@pagerland/common/src/components/Box';
import List from '@pagerland/common/src/components/List';
import Button from '@pagerland/common/src/components/Button';
import NavbarWrapper from '@pagerland/common/src/components/Navbar';

import useActiveIndicator from '@pagerland/common/src/hooks/useActiveIndicator';
import useIsWindowScrollMoreThan from '@pagerland/common/src/hooks/useIsWindowScrollMoreThan';

import LanderPagerLogo from '../../components/Logo';

import data from '../../data';
import {
  LogoWrapper,
  MobileWrapper,
  NavbarLink,
  NavIndicator,
  ToggleButton,
  Wrapper,
} from './styled.components';
import { zIndex } from '../../styles';

const Navbar = ({
  WrapperProps,
  ContainerProps,
  MenuItemsListProps,
  LogoProps,
  LinksWrapperProps,
  LinkProps,
  ToggleButtonProps,
  MobileMenuProps,
  MobileMenuToggleProps,
  ActiveIndicatorProps,
  ActionsWrapperProps,
  ActionProps,
  Logo,
  links,
  actions,
}) => {
  const { ref, setActiveMenu, indicatorWidth, indicatorLeft } = useActiveIndicator();
  const isNavbarSticky = useIsWindowScrollMoreThan(0);

  const menu = onClick => (
    <>
      {links && (
        <List {...LinksWrapperProps}>
          {links.map(({ label, ...link }, i) => (
            <List.Item key={i}>
              <NavbarLink onSetActive={setActiveMenu} {...LinkProps} onClick={onClick} {...link}>
                {label}
              </NavbarLink>
            </List.Item>
          ))}
        </List>
      )}
      {actions && (
        <Box {...ActionsWrapperProps}>
          {actions.map(({ label, ...link }, i) => (
            <Button {...ActionProps} onClick={onClick} {...link} key={i}>
              {label}
            </Button>
          ))}
        </Box>
      )}
    </>
  );

  return (
    <NavbarWrapper
      rwdMenu={({ onToggle, isOpen, onClose }) => (
        <MobileWrapper isActive={isOpen} {...MobileMenuProps}>
          <ToggleButton isActive={isOpen} toggleButton={onToggle} {...MobileMenuToggleProps} />
          {menu(onClose)}
        </MobileWrapper>
      )}
    >
      {({ onToggle, isOpen, onClose }) => (
        <Wrapper
          className={classNames({
            sticky: isNavbarSticky,
          })}
          {...WrapperProps}
        >
          <Container {...ContainerProps}>
            <Box flexBox alignItems="center">
              {Logo && (
                <LogoWrapper {...LogoProps}>
                  <Logo />
                </LogoWrapper>
              )}
              <Box {...MenuItemsListProps} ref={ref}>
                <NavIndicator
                  style={{
                    width: `${indicatorWidth}px`,
                    left: `${indicatorLeft}px`,
                  }}
                  {...ActiveIndicatorProps}
                />
                {menu(onClose)}
              </Box>
              <ToggleButton isActive={isOpen} toggleButton={onToggle} {...ToggleButtonProps} />
            </Box>
          </Container>
        </Wrapper>
      )}
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  MenuItemsListProps: PropTypes.object,
  LinksWrapperProps: PropTypes.object,
  LinkProps: PropTypes.object,
  LogoProps: PropTypes.object,
  ToggleButtonProps: PropTypes.object,
  MobileMenuProps: PropTypes.object,
  MobileMenuToggleProps: PropTypes.object,
  ActiveIndicatorProps: PropTypes.object,
  ActionsWrapperProps: PropTypes.object,
  ActionProps: PropTypes.object,
  Logo: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
};

Navbar.defaultProps = {
  WrapperProps: {
    color: 'gray.6',
    stickyBgColor: 'gray.6',
    stickyColor: 'gray.0',
  },
  ContainerProps: {
    py: 24,
  },
  MenuItemsListProps: {
    display: {
      _: 'none',
      lg: 'flex',
    },
    alignItems: 'center',
    width: '100%',
  },
  LogoProps: {
    as: Link,
    to: '',
    ...smoothLinkProps,
    mx: {
      _: 'auto',
      md: '0',
    },
  },
  LinksWrapperProps: {
    display: 'flex',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    alignItems: 'center',
    mr: {
      _: 'auto',
      lg: '0',
    },
    ml: 'auto',
  },
  LinkProps: {
    mx: {
      _: 0,
      lg: 3,
    },
    my: {
      _: 3,
      lg: 0,
    },
    as: Link,
    ...smoothLinkProps,
  },
  ToggleButtonProps: {
    buttonWidth: 24,
    position: 'absolute',
    right: 3,
    display: {
      lg: 'none',
    },
  },
  MobileMenuProps: {
    display: {
      _: 'flex',
      lg: 'none',
    },
    position: 'fixed',
    backgroundColor: 'gray.6',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex.menuNav,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  MobileMenuToggleProps: {
    buttonWidth: 24,
    color: 'primary',
    position: 'absolute',
    right: 3,
    top: 3,
  },
  ActiveIndicatorProps: {
    bg: 'brand',
    height: 4,
  },
  ActionProps: {
    variant: 'brand',
    size: 'small',
    py: 12,
    px: 24,
    ml: 3,
  },
  Logo: LanderPagerLogo,
  ...data.navbar,
};

export default Navbar;
