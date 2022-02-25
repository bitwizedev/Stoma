import React from "react";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";
import LeftMenu from "../components/LeftMenu";
import TopMenu from "../components/TopMenu";

export default function HomeDashboard(){
    return (
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
			  {/* BEGIN: Subheader */}
			  <div className="m-subheader ">
				<div className="d-flex align-items-center">
				  <div className="mr-auto">
					<h3 className="m-subheader__title m-subheader__title--separator">
					  Adaugă Pacient
					</h3>
					<ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
					  <li className="m-nav__item m-nav__item--home">
						<a href="#" className="m-nav__link m-nav__link--icon">
						  <i className="m-nav__link-icon la la-home" />
						</a>
					  </li>
					</ul>
				  </div>
				</div>
			  </div>
			  {/* END: Subheader */}
			  <div className="m-content">
				<div className="row">
				  <div className="col-md-6">
					{/*begin::Portlet*/}
					<div className="m-portlet m-portlet--tab">
					  <div className="m-portlet__head">
						<div className="m-portlet__head-caption">
						  <div className="m-portlet__head-title">
							<span className="m-portlet__head-icon m--hide">
							  <i className="la la-gear" />
							</span>
							<h3 className="m-portlet__head-text">
							  Informații pacient
							</h3>
						  </div>
						</div>
					  </div>
					  {/*begin::Form*/}
					  <form className="m-form m-form--fit m-form--label-align-right">
						<div className="m-portlet__body">
						  <div className="form-group m-form__group row">
							<label htmlFor="example-text-input" className="col-2 col-form-label">
							  Nume
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="text" defaultValue="" id="example-text-input" />
							</div>
						  </div>
                          <div className="form-group m-form__group row">
							<label htmlFor="example-text-input" className="col-2 col-form-label">
							  Prenume
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="text" defaultValue="" id="example-text-input" />
							</div>
						  </div>
						  <div className="form-group m-form__group row">
							<label htmlFor="example-email-input" className="col-2 col-form-label">
							  Email
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="email" defaultValue="" id="example-email-input" />
							</div>
						  </div>
						  <div className="form-group m-form__group row">
							<label htmlFor="example-tel-input" className="col-2 col-form-label">
							  Telefon
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="tel" defaultValue="" id="example-tel-input" />
							</div>
						  </div>
						  <div className="form-group m-form__group row">
							<label htmlFor="example-number-input" className="col-2 col-form-label">
							  Adresa
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="text" defaultValue="" id="example-number-input" />
							</div>
						  </div>
						  <div className="form-group m-form__group row">
							<label htmlFor="example-date-input" className="col-2 col-form-label">
                            Data nașterii
							</label>
							<div className="col-10">
							  <input className="form-control m-input" type="date" defaultValue="2011-08-19" id="example-date-input" />
							</div>
						  </div>
						</div>
						<div className="m-portlet__foot m-portlet__foot--fit">
						  <div className="m-form__actions">
							<div className="row">
							  <div className="col-2" />
							  <div className="col-10">
								<button type="reset" className="btn btn-success">
								  Adaugă
								</button>
								<button type="reset" className="btn btn-secondary">
								  Șterge
								</button>
							  </div>
							</div>
						  </div>
						</div>
					  </form>
					</div>
					{/*end::Portlet*/}
				  </div>
				  <div className="col-md-6">
					{/*begin::Portlet*/}
					<div className="m-portlet m-portlet--tab">
					  <div className="m-portlet__head">
						<div className="m-portlet__head-caption">
						  <div className="m-portlet__head-title">
							<span className="m-portlet__head-icon m--hide">
							  <i className="la la-gear" />
							</span>
							<h3 className="m-portlet__head-text">
							  Fișa cu alergii și boli
							</h3>
						  </div>
						</div>
					  </div>
					  {/*begin::Form*/}
					  <form className="m-form m-form--fit m-form--label-align-right">
						<div className="m-portlet__body">
						  <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 1
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 2
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 3
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 4
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 5
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 6
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 7
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
                          <div className="form-group m-form__group">
							<label htmlFor="exampleInputPassword1">
							  Intrebare 8
							</label>
							<input type="text" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Completati aici" />
						  </div>
						</div>
					  </form>
					  {/*end::Form*/}
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  {/* end:: Body */}
		</div>
	  );
}