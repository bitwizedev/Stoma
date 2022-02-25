import React from "react";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";
import FirstandLastname from "../assets/First_Last_Name";
import CurrentData from "../assets/CurrentData";
import Signaturepad from "../assets/SignaturePad";
import LeftMenu from "../components/LeftMenu";
import TopMenu from "../components/TopMenu";

export default function CovidChestion(){
    return(
      <div className="m-grid m-grid--hor m-grid--root m-page">
		  {/* BEGIN: Header */}
		  <TopMenu />
		  {/* END: Header */}		
		  {/* begin::Body */}
		  <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
			{/* BEGIN: Left Aside */}
			<button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
				<i className="la la-close" />
			</button>
			<div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
				{/* BEGIN: Aside Menu */}
				<LeftMenu />
				{/* END: Aside Menu */}
     		 </div>
			{/* END: Left Aside */}
			<div className="m-grid__item m-grid__item--fluid m-wrapper">
      <div className="m-content">
        {/*Begin::Main Portlet*/}
        <div className="m-portlet m-portlet--full-height">
          {/*begin: Portlet Head*/}
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">Chestionar Covid </h3>
              </div>
            </div>
            <div className="m-portlet__head-tools">
              <ul className="m-portlet__nav">
                <li className="m-portlet__nav-item">
                  <a
                    href={() => false}
                    data-toggle="m-tooltip"
                    className="m-portlet__nav-link m-portlet__nav-link--icon"
                    data-direction="left"
                    data-width="auto"
                    title="Get help with filling up this form"
                  >
                    <i className="flaticon-info m--icon-font-size-lg3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end: Portlet Head*/}
          {/*begin: Portlet Body*/}
          <div className="m-portlet__body m-portlet__body--no-padding">
            {/*begin: Form Wizard*/}
            <div className="m-wizard m-wizard--4 m-wizard--brand" id="m_wizard">
              <div className="row m-row--no-padding">
                <div className="col-xl-3 col-lg-12 m--padding-top-20 m--padding-bottom-15">
                  {/*begin: Form Wizard Head */}
                  <div className="m-wizard__head">
                    {/*begin: Form Wizard Nav */}
                    <div className="m-wizard__nav">
                      <div className="m-wizard__steps">
                        <div
                          className="m-wizard__step"
                          m-wizard-target="m_wizard_form_step_2"
                        >
                          <div className="m-wizard__step-info">
                            <a href={() => false} className="m-wizard__step-number">
                              <span>
                                <span>1</span>
                              </span>
                            </a>
                            <div className="m-wizard__step-label">
                              Chestionar Covid
                            </div>
                            <div className="m-wizard__step-icon">
                              <i className="la la-check" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end: Form Wizard Nav */}
                  </div>
                  {/*end: Form Wizard Head */}
                </div>
                <div className="col-xl-9 col-lg-12">
                  {/*begin: Form Wizard Step 2*/}
                  <div
                    className="m-wizard__form-step"
                    id="m_wizard_form_step_2"
                  >
                    <div className="m-form__section m-form__section--first">
                      <div className="m-separator m-separator--dashed m-separator--lg" />
                      <div className="m-form__section">
                        <div className="m-form__heading">
                          <h3 className="m-form__heading-title">
                            Intrebari referitoare la situatia SARS COV-19
                          </h3>
                        </div>
                        <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                            <label className="form-control-label">
                              * Ati intrat in contact in ultimele 14 zile cu
                              persoane diagnosticate cu virusul
                              SARS-CoV-2(COVID-19)?
                            </label>
                            <div className="m-radio-inline">
                              <label className="m-radio m-radio--solid m-radio--brand">
                                <input
                                  type="radio"
                                  name="account_group"
                                  defaultChecked
                                  defaultValue={2}
                                />
                                Da
                                <span />
                              </label>
                              <label className="m-radio m-radio--solid m-radio--brand">
                                <input
                                  type="radio"
                                  name="account_group"
                                  defaultValue={2}
                                />
                                Nu
                                <span />
                              </label>
                            </div>
                            <span className="m-form__help">
                              Va rog selectati un raspuns
                            </span>
                          </div>
                          <div className="col-lg-6 m-form__group-sub">
                            <label className="form-control-label">
                              * Ati interactionat in ultimel1 14 zile cu
                              persoane care au prezentat simptome asociate
                              infectiei cu virusul SARS-CoV-2 (COVID-19)?
                            </label>
                            <div className="m-checkbox-inline">
                              <label className="m-checkbox m-checkbox--solid m-checkbox--brand">
                                <input
                                  type="checkbox"
                                  name="account_communication[]"
                                  defaultChecked
                                  defaultValue="email"
                                />
                                Da
                                <span />
                              </label>
                              <label className="m-checkbox m-checkbox--solid  m-checkbox--brand">
                                <input
                                  type="checkbox"
                                  name="account_communication[]"
                                  defaultValue="sms"
                                />
                                Nu
                                <span />
                              </label>
                            </div>
                            <span className="m-form__help">
                              Va rog selectati un raspuns
                            </span>
                          </div>
                        </div>
                        <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                            <label className="form-control-label">
                              * Ati interactionat in ultimel1 14 zile cu
                              persoane care au stat in izolare/carantina impusa
                              de autoritati?
                            </label>
                            <div className="m-radio-inline">
                              <label className="m-radio m-radio--solid m-radio--brand">
                                <input
                                  type="radio"
                                  name="account_group"
                                  defaultChecked
                                  defaultValue={2}
                                />
                                Da
                                <span />
                              </label>
                              <label className="m-radio m-radio--solid m-radio--brand">
                                <input
                                  type="radio"
                                  name="account_group"
                                  defaultValue={2}
                                />
                                Nu
                                <span />
                              </label>
                            </div>
                            <span className="m-form__help">
                              Va rog selectati un raspuns
                            </span>
                          </div>
                          <div className="col-lg-6 m-form__group-sub">
                            <label className="form-control-label">
                              * Care sunt bolile de care suferiti?
                            </label>
                            <div className="m-checkbox-inline">
                              <label className="m-checkbox m-checkbox--solid m-checkbox--brand">
                                <input
                                  type="checkbox"
                                  name="account_communication[]"
                                  defaultChecked
                                  defaultValue="email"
                                />
                                Da
                                <span />
                              </label>
                              <label className="m-checkbox m-checkbox--solid  m-checkbox--brand">
                                <input
                                  type="checkbox"
                                  name="account_communication[]"
                                  defaultValue="sms"
                                />
                                Nu
                                <span />
                              </label>
                            </div>
                            <span className="m-form__help">
                              Va rog selectati un raspuns
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group m-form__group row">
                        <div className="col-lg-6 m-form__group-sub">
                          <label className="form-control-label">
                            * V-a fost impusa in ultimele 14 zile izolarea sau
                            carantina la domiciliu de catre autoritati?
                          </label>
                          <div className="m-radio-inline">
                            <label className="m-radio m-radio--solid m-radio--brand">
                              <input
                                type="radio"
                                name="account_group"
                                defaultChecked
                                defaultValue={2}
                              />
                              Da
                              <span />
                            </label>
                            <label className="m-radio m-radio--solid m-radio--brand">
                              <input
                                type="radio"
                                name="account_group"
                                defaultValue={2}
                              />
                              Nu
                              <span />
                            </label>
                          </div>
                          <span className="m-form__help">
                            Va rog selectati un raspuns
                          </span>
                        </div>
                      </div>
                      <div className="form-group m-form__group row">
                        <div className="col-lg-6 m-form__group-sub">
                          <label className="form-control-label">
                            * Ati avut in ultimele 14 zile unul din simptomele
                            de mai jos?
                          </label>
                          <div className="m-radio-inline">
                            <label className="m-radio m-radio--solid m-radio--brand">
                              <input
                                type="radio"
                                name="account_group"
                                defaultChecked
                                defaultValue={2}
                              />
                              Da
                              <span />
                            </label>
                            <label className="m-radio m-radio--solid m-radio--brand">
                              <input
                                type="radio"
                                name="account_group"
                                defaultValue={2}
                              />
                              Nu
                              <span />
                            </label>
                          </div>
                          <span className="m-form__help">
                            Va rog selectati un raspuns
                          </span>
                        </div>
                        {/*end: Form Wizard Step 2*/}
                      </div>
                      {/*end: Form Body */}
                      <FirstandLastname/>
                      <CurrentData/>
                      <Signaturepad/>
                      {/*begin: Form Actions */}
                      <div className="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
                        <div className="m-form__actions">
                          <div className="row">
                            <div className="col-lg-6 m--align-left">
                              <a
                                href={() => false}
                                className="btn btn-secondary m-btn m-btn--custom m-btn--icon"
                                data-wizard-action="prev"
                              >
                                <span>
                                  <i className="la la-arrow-left" />
                                  &nbsp;&nbsp;
                                  <span>Back</span>
                                </span>
                              </a>
                            </div>
                            <div className="col-lg-6 m--align-right">
                              <a
                                href={() => false}
                                className="btn btn-primary m-btn m-btn--custom m-btn--icon"
                                data-wizard-action="submit"
                              >
                                <span>
                                  <i className="la la-check" />
                                  &nbsp;&nbsp;
                                  <span>Submit</span>
                                </span>
                              </a>
                              <a
                                href={() => false}
                                className="btn btn-success m-btn m-btn--custom m-btn--icon"
                                data-wizard-action="next"
                              >
                                <span>
                                  <span>Save &amp; Continue</span>
                                  &nbsp;&nbsp;
                                  <i className="la la-arrow-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end: Form Actions */}
                    </div>
                    {/*end: Form Wizard Form*/}
                  </div>
                </div>
              </div>
              {/*end: Form Wizard*/}
            </div>
            {/*end: Portlet Body*/}
          </div>
          {/*End::Main Portlet*/}
        </div>
      </div>
			</div>
		  </div>
		  {/* end:: Body */}
		</div>
    )
    
}