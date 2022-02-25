import React from "react";

export default function LeftMenu() {
    return (
      <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
        {/* BEGIN: Aside Menu */}
        <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical={1} m-menu-scrollable={0} m-menu-dropdown-timeout={500}>
          <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
            <li className="m-menu__item " aria-haspopup="true">
              <a href="/Panel" className="m-menu__link ">
                <i className="m-menu__link-icon flaticon-line-graph" />
                <span className="m-menu__link-title">
                  <span className="m-menu__link-wrap">
                    <span className="m-menu__link-text">
                      Home
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="m-menu__section">
              <h4 className="m-menu__section-text">
                Pacienți
              </h4>
              <i className="m-menu__section-icon flaticon-more-v3" />
            </li>
            <li className="m-menu__item " aria-haspopup="true">
              <a href="/Adauga-Pacient" className="m-menu__link ">
                <i className="m-menu__link-icon flaticon-line-graph" />
                <span className="m-menu__link-title">
                  <span className="m-menu__link-wrap">
                    <span className="m-menu__link-text">
                      Adauga pacient
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="m-menu__item " aria-haspopup="true">
              <a href="/Covid-Chestionar" className="m-menu__link ">
                <i className="m-menu__link-icon flaticon-medical" />
                <span className="m-menu__link-title">
                  <span className="m-menu__link-wrap">
                    <span className="m-menu__link-text">
                      Chestionar COVID
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="m-menu__item " aria-haspopup="true">
              <a href="/Panel" className="m-menu__link ">
                <i className="m-menu__link-icon flaticon-calendar-3" />
                <span className="m-menu__link-title">
                  <span className="m-menu__link-wrap">
                    <span className="m-menu__link-text">
                      Calendar
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="m-menu__section">
              <h4 className="m-menu__section-text">
                Cabinet
              </h4>
              <i className="m-menu__section-icon flaticon-more-v3" />
            </li>
            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
              <a href="javascript:;" className="m-menu__link m-menu__toggle">
                <i className="m-menu__link-icon flaticon-interface-9" />
                <span className="m-menu__link-text">
                  Secțiune 1
                </span>
                <i className="m-menu__ver-arrow la la-angle-right" />
              </a>
              <div className="m-menu__submenu ">
                <span className="m-menu__arrow" />
                <ul className="m-menu__subnav">
                  <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                    <span className="m-menu__link">
                      <span className="m-menu__link-text">
                        Sub-secțiune v0
                      </span>
                    </span>
                  </li>
                  <li className="m-menu__item " aria-haspopup="true">
                    <a href="../../../snippets/general/pricing-tables/pricing-table-1.html" className="m-menu__link ">
                      <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span />
                      </i>
                      <span className="m-menu__link-text">
                        Sub-secțiune v1
                      </span>
                    </a>
                  </li>
                  <li className="m-menu__item " aria-haspopup="true">
                    <a href="../../../snippets/general/pricing-tables/pricing-table-2.html" className="m-menu__link ">
                      <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span />
                      </i>
                      <span className="m-menu__link-text">
                      Sub-secțiune v2
                      </span>
                    </a>
                  </li>
                  <li className="m-menu__item " aria-haspopup="true">
                    <a href="../../../snippets/general/pricing-tables/pricing-table-3.html" className="m-menu__link ">
                      <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span />
                      </i>
                      <span className="m-menu__link-text">
                      Sub-secțiune v3
                      </span>
                    </a>
                  </li>
                  <li className="m-menu__item " aria-haspopup="true">
                    <a href="../../../snippets/general/pricing-tables/pricing-table-4.html" className="m-menu__link ">
                      <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span />
                      </i>
                      <span className="m-menu__link-text">
                      Sub-secțiune v4
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="m-menu__item" aria-haspopup="true" m-menu-submenu-toggle="hover">
              <a href="javascript:;" className="m-menu__link">
                <i className="m-menu__link-icon flaticon-piggy-bank" />
                <span className="m-menu__link-text">
                  Secțiune 2
                </span>
              </a>
            </li>
            <li className="m-menu__item" aria-haspopup="true" m-menu-submenu-toggle="hover">
              <a href="javascript:;" className="m-menu__link">
                <i className="m-menu__link-icon flaticon-exclamation" />
                <span className="m-menu__link-text">
                Secțiune 3
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* END: Aside Menu */}
      </div>
    )
}
