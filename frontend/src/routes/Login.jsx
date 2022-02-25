import React, { useState } from "react";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";
import logo1 from "../assets/app/media/img//logos/logo-2.png";
import background from "../assets/app/media/img//bg/bg-4.jpg";
import logo from "../static/tooth.png";

export default function Login(){
  return (
    <div >
      ;<>

  {/* begin::Head */}
  <meta charSet="utf-8" />
  <title>Stoma</title>
  <meta name="description" content="Latest updates and statistic charts" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/*begin::Web font */}
  {/*end::Web font */}
  {/*begin::Base Styles */}
  {/* end::Head */}
  {/* end::Body */}
  {/* begin:: Page */}
  <div className="m-grid m-grid--hor m-grid--root m-page">
    <div
      className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin"
      id="m_login"
    >
      <div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
        <div className="m-stack m-stack--hor m-stack--desktop">
          <div className="m-stack__item m-stack__item--fluid">
            <div className="m-login__wrapper">
              <div className="m-login__logo">
                <a href="#">
                  <img src={logo1} />
                </a>
              </div>
              <div className="m-login__signin">
                <div className="m-login__head">
                  <h3 className="m-login__title">Autentificare Stoma</h3>
                </div>
                <form className="m-login__form m-form" action>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input m-login__form-input--last"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="row m-login__form-sub">
                    <div className="col m--align-left">
                      <label className="m-checkbox m-checkbox--focus">
                        <input type="checkbox" name="remember" />
                        Tine-ma minte
                        <span />
                      </label>
                    </div>
                    <div className="col m--align-right">
                      <a
                        href="javascript:;"
                        id="m_login_forget_password"
                        className="m-link"
                      >
                       Ai uitat parola ?
                      </a>
                    </div>
                  </div>
                  <div className="m-login__form-action">
                    <button
                      id="m_login_signin_submit"
                      className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="m-login__signup">
                <div className="m-login__head">
                  <h3 className="m-login__title">Sign Up</h3>
                  <div className="m-login__desc">
                    Enter your details to create your account:
                  </div>
                </div>
                <form className="m-login__form m-form" action>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Fullname"
                      name="fullname"
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input m-login__form-input--last"
                      type="password"
                      placeholder="Confirm Password"
                      name="rpassword"
                    />
                  </div>
                  <div className="row form-group m-form__group m-login__form-sub">
                    <div className="col m--align-left">
                      <label className="m-checkbox m-checkbox--focus">
                        <input type="checkbox" name="agree" />I Agree the
                        <a href={() => false} className="m-link m-link--focus">
                          terms and conditions
                        </a>
                        .
                        <span />
                      </label>
                      <span className="m-form__help" />
                    </div>
                  </div>
                  <div className="m-login__form-action">
                    <button
                      id="m_login_signup_submit"
                      className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                    >
                      Sign Up
                    </button>
                    <button
                      id="m_login_signup_cancel"
                      className="btn btn-outline-focus  m-btn m-btn--pill m-btn--custom"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div className="m-login__forget-password">
                <div className="m-login__head">
                  <h3 className="m-login__title">Ai uitat parola ?</h3>
                  <div className="m-login__desc">
                    Enter your email to reset your password:
                  </div>
                </div>
                <form className="m-login__form m-form" action>
                  <div className="form-group m-form__group">
                    <input
                      className="form-control m-input"
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="m_email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="m-login__form-action">
                    <button
                      id="m_login_forget_password_submit"
                      className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                    >
                      Request
                    </button>
                    <button
                      id="m_login_forget_password_cancel"
                      className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="m-stack__item m-stack__item--center">
            <div className="m-login__account">
              <span className="m-login__account-msg">
               Nu ai cont inca ?
              </span>
              &nbsp;&nbsp;
              <a
                href="javascript:;"
                id="m_login_signup"
                className="m-link m-link--focus m-login__account-link"
              >
                Inregistreaza-te
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1	m-login__content"
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        <div className="m-grid__item m-grid__item--middle">
          <h3 className="m-login__welcome">Bun venit la Stoma Life</h3>
          <p className="m-login__msg">
           O platforma care va face viata mai usoara!
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* end:: Page */}
  {/*begin::Base Scripts */}
  {/*end::Base Scripts */}
  {/*begin::Page Snippets */}
  {/*end::Page Snippets */}
  {/* end::Body */}
</>

    </div>
  );
};