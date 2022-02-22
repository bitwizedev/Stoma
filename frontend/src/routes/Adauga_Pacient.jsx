import React from "react";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";
import FirstandLastname from "../assets/First_Last_Name";
import CurrentData from "../assets/CurrentData";
import Signaturepad from "../assets/SignaturePad";
import Header from "../components/Navbar";





export default function AdaugaPacient(){
    return(
      
    <div>
   
   ;<>
  
  {/* begin::Head */}
  <meta charSet="utf-8" />
  <title>Metronic | Form Wizard 4</title>
  <meta name="description" content="Form wizard examples" />
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
    <Header/>
    {/* BEGIN: Header */}
    {/* begin::Body */}
    {/* END: Left Aside */}
    <div className="m-grid__item m-grid__item--fluid m-wrapper">
      {/* BEGIN: Subheader */}
      {/* END: Subheader */}
      <div className="m-content">
        {/*Begin::Main Portlet*/}
        <div className="m-portlet m-portlet--full-height">
          {/*begin: Portlet Head*/}
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">Adauga pacient nou</h3>
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
                              Adauga pacient nou
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
                           Completati campurile de mai jos pentru a adauga un nou pacient
                          </h3>
                        </div>
                        <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                          <div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Nume:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="name" class="form-control m-input" placeholder="" value="Popescu"/>
																		<span class="m-form__help">
																		Va rog completati cu numele dumneavoastra
																		</span>
																	</div>
																</div>					
                        
                          </div>
                          
                        </div>
                        <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                          <div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Prenume:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="prenume" class="form-control m-input" placeholder="" value="Ion"/>
																		<span class="m-form__help">
																		Va rog completati cu prenumele dumneavoastra
																		</span>
																	</div>
																</div>					
                        
                          </div>
                          </div>
                          <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                          <div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Telefon:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="telefon" class="form-control m-input" placeholder="" value="070000"/>
																		<span class="m-form__help">
																		Va rog completati cu numarul dumneavoastra de telefon
																		</span>
																	</div>
																</div>					
                        
                          </div>
                          </div>
                     
                      </div>
                      <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                          <div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Email:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="email" class="form-control m-input" placeholder="" value="ionpopescu@gmail.com"/>
																		<span class="m-form__help">
																		Va rog completati cu email-ul dumneavoastra
																		</span>
																	</div>
																</div>					
                        
                          </div>
                          </div>
                          <div className="form-group m-form__group row">
                          <div className="col-lg-6 m-form__group-sub">
                          <div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* CNP:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="cnp" class="form-control m-input" placeholder="" value="19905064234"/>
																		<span class="m-form__help">
																		Va rog completati cu CNP-ul dumneavoastra
																		</span>
																	</div>
																</div>					
                        
                          </div>
                          </div>
                      {/*end: Form Body */}
                      <CurrentData/>
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
    {/* end:: Body */}
  </div>
  {/* end:: Page */}
  {/* begin::Scroll Top */}
  <div id="m_scroll_top" className="m-scroll-top">
    <i className="la la-arrow-up" />
  </div>
  {/* end::Scroll Top */}
  {/* begin::Quick Nav */}
  {/*begin::Base Scripts */}
  {/*end::Base Scripts */}
  {/*begin::Page Resources */}
  {/*end::Page Resources */}
  {/* end::Body */}
</>

        </div>
    );
}