import React from "react";

function Navbar() {
  return (
    <>
      <header id="top">
        <div class="container">
          <div class="row">
            <div class="col span_3">
              <ul class="left-aligned-ocm" data-user-set="1">
                <li
                  class="slide-out-widget-area-toggle small"
                  data-icon-animation="simple-transform"
                  data-custom-color="false"
                >
                  <div>
                    {" "}
                    <a
                      href="#sidewidgetarea"
                      aria-label="Navigation Menu"
                      aria-expanded="false"
                      role="button"
                      class="closed"
                    >
                      {" "}
                      <span class="screen-reader-text">Menu</span>
                      <span aria-hidden="true">
                        {" "}
                        <i class="lines-button x2">
                          {" "}
                          <i class="lines"></i>{" "}
                        </i>{" "}
                      </span>{" "}
                    </a>{" "}
                  </div>
                </li>
              </ul>{" "}
              <a
                id="logo"
                href="https://electrolandgh.com"
                data-supplied-ml-starting-dark="false"
                data-supplied-ml-starting="false"
                data-supplied-ml="true"
              >
                <img
                  class="stnd skip-lazy default-logo dark-version"
                  width="268"
                  height="212"
                  alt="Electroland"
                  src="https://electrolandgh.com/wp-content/uploads/2021/04/egl-ghana.png"
                  srcset="https://electrolandgh.com/wp-content/uploads/2021/04/egl-ghana.png 1x, https://electrolandgh.com/wp-content/uploads/2021/04/egl-ghana.png 2x"
                />
                <img
                  class="mobile-only-logo skip-lazy"
                  alt="Electroland"
                  width="268"
                  height="212"
                  src="https://electrolandgh.com/wp-content/uploads/2021/04/egl-ghana.png"
                />
              </a>
            </div>
            <div class="col span_9 col_last">
              <div class="nectar-mobile-only mobile-header">
                <div class="inner"></div>
              </div>
              <a class="mobile-search" href="#searchbox">
                <span
                  class="nectar-icon icon-salient-search"
                  aria-hidden="true"
                ></span>
                <span class="screen-reader-text">search</span>
              </a>
              <a class="mobile-user-account" href="/my-account/">
                <span
                  class="normal icon-salient-m-user"
                  aria-hidden="true"
                ></span>
                <span class="screen-reader-text">account</span>
              </a>
              <a
                id="mobile-cart-link"
                data-cart-style="dropdown"
                href="https://electrolandgh.com/shopping-cart/"
              >
                <i class="icon-salient-cart"></i>
                <div class="cart-wrap">
                  <span>0 </span>
                </div>
              </a>

              <div
                class="slide-out-widget-area-toggle mobile-icon slide-out-from-right-hover small"
                data-custom-color="false"
                data-icon-animation="simple-transform"
              >
                <div>
                  {" "}
                  <a
                    href="#sidewidgetarea"
                    role="button"
                    aria-label="Navigation Menu"
                    aria-expanded="false"
                    class="closed"
                  >
                    <span class="screen-reader-text">Menu</span>
                    <span aria-hidden="true">
                      {" "}
                      <i class="lines-button x2">
                        {" "}
                        <i class="lines"></i>{" "}
                      </i>{" "}
                    </span>
                  </a>
                </div>
              </div>
              <nav>
                <ul class="sf-menu sf-js-enabled sf-arrows">
                  <li
                    id="menu-item-34529"
                    class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item nectar-regular-menu-item menu-item-34529"
                  >
                    <a
                      href="https://electrolandgh.com/shop/"
                      aria-current="page"
                    >
                      <span class="menu-title-text">Shop All Categories</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-14123"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-14123"
                  >
                    <a href="." class="sf-with-ul">
                      <span class="menu-title-text">By Brand</span>
                      <span class="sf-sub-indicator">
                        <i
                          class="fa fa-angle-down icon-in-menu"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-34509"
                        class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-34509"
                      >
                        <a href="https://electrolandgh.com/samsung/">
                          <span class="menu-title-text">Samsung</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-34508"
                        class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-34508"
                      >
                        <a href="https://electrolandgh.com/tcl/">
                          <span class="menu-title-text">TCL</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-34507"
                        class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-34507"
                      >
                        <a href="https://electrolandgh.com/electrolux/">
                          <span class="menu-title-text">Electrolux</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-34697"
                        class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-34697"
                      >
                        <a href="https://electrolandgh.com/midea/">
                          <span class="menu-title-text">Midea</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-14127"
                        class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-14127"
                      >
                        <a href="/index.php/product-brands/nasco/">
                          <span class="menu-title-text">Nasco</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-20618"
                        class="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-20618"
                      >
                        <a href="/index.php/product-brands/abb/">
                          <span class="menu-title-text">ABB</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-16492"
                    class="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-16492"
                  >
                    <a href="https://electrolandgh.com/showrooms/">
                      <span class="menu-title-text">Showrooms</span>
                    </a>
                  </li>
                </ul>
                <ul class="buttons sf-menu" data-user-set-ocm="1">
                  <li id="search-btn">
                    <div>
                      <a href="#searchbox">
                        <span
                          class="icon-salient-search"
                          aria-hidden="true"
                        ></span>
                        <span class="screen-reader-text">search</span>
                      </a>
                    </div>{" "}
                  </li>
                  <li id="nectar-user-account">
                    <div>
                      <a href="/my-account/">
                        <span
                          class="icon-salient-m-user"
                          aria-hidden="true"
                        ></span>
                        <span class="screen-reader-text">account</span>
                      </a>
                    </div>{" "}
                  </li>
                  <li class="nectar-woo-cart">
                    <div
                      class="cart-outer"
                      data-user-set-ocm="1"
                      data-cart-style="dropdown"
                    >
                      <div class="cart-menu-wrap">
                        <div class="cart-menu">
                          <a
                            class="cart-contents"
                            aria-label="Cart"
                            href="https://electrolandgh.com/shopping-cart/"
                          >
                            <div class="cart-icon-wrap">
                              <i class="icon-salient-cart"></i>{" "}
                              <div class="cart-wrap">
                                <span>0 </span>
                              </div>{" "}
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="cart-notification">
                        <span class="item-name"></span> was successfully added
                        to your cart.{" "}
                      </div>
                      <div class="widget woocommerce widget_shopping_cart">
                        <div class="widget_shopping_cart_content">
                          <p class="woocommerce-mini-cart__empty-message">
                            No products in the cart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="logo-spacing" data-using-image="true">
                <img
                  class="hidden-logo"
                  alt="Electroland"
                  width="268"
                  height="212"
                  src="https://electrolandgh.com/wp-content/uploads/2021/04/egl-ghana.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
