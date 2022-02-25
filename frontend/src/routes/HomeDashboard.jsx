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
					  Home
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
							  Adauga consultație nouă
							</h3>
						  </div>
						</div>
					  </div>
					  {/*begin::Form*/}
					  <form className="m-form m-form--fit m-form--label-align-right">
						<div className="m-portlet__body">
						  <div className="form-group m-form__group m--margin-top-10">
							<div className="alert m-alert m-alert--default" role="alert">
							  Adauga aici consultația pacientului curent
							</div>
						  </div>
						  <div className="form-group m-form__group">
							<label htmlFor="numePacient">
							  Nume Pacient
							</label>
							<input type="text" className="form-control m-input" id="numePacient" aria-describedby="emailHelp" placeholder="Enter email" />
							<span className="m-form__help">
							  Numele și prenumele pacientului
							</span>
						  </div>
						  <div className="form-group m-form__group">
							<label htmlFor="exampleSelect1">
							  Lucrare efectuată
							</label>
							<select className="form-control m-input" id="exampleSelect1">
							  <option>
								Lucrare 1
							  </option>
							  <option>
								Lucrare 2
							  </option>
							  <option>
							  Lucrare 3
							  </option>
							  <option>
							  Lucrare 4
							  </option>
							  <option>
							  Lucrare 5
							  </option>
							</select>
						  </div>
						  <div className="form-group m-form__group">
							<label htmlFor="exampleInputEmail1">
							  Radiografie
							</label>
							<div />
							<div className="custom-file">
							  <input type="file" className="custom-file-input" id="customFile" />
							  <label className="custom-file-label" htmlFor="customFile">
								Alege fișier
							  </label>
							</div>
						  </div>
						  <div className="form-group m-form__group">
							<label htmlFor="exampleTextarea">
							  Observații
							</label>
							<textarea className="form-control m-input" id="exampleTextarea" rows={3} defaultValue={""} />
						  </div>
						</div>
						<div className="m-portlet__foot m-portlet__foot--fit">
						  <div className="m-form__actions">
							<button type="reset" className="btn btn-primary">
							  Trimite
							</button>
							<button type="reset" className="btn btn-secondary">
							  Șterge
							</button>
						  </div>
						</div>
					  </form>
					  {/*end::Form*/}
					</div>
					{/*end::Portlet*/}
				  </div>
				  <div className="col-md-6">
					
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
						<div className="m-portlet__head-caption">
							<div className="m-portlet__head-title">
							<h3 className="m-portlet__head-text">
							Programări astăzi
							</h3>
							</div>
						</div>
						<div className="m-portlet__head-tools">
							<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
							<li className="nav-item m-tabs__item">
								<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget2_tab1_content" role="tab">
								Astăzi
								</a>
							</li>
							<li className="nav-item m-tabs__item">
								<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab2_content" role="tab">
								Mâine
								</a>
							</li>
							</ul>
						</div>
						</div>
						<div className="m-portlet__body">
						<div className="tab-content">
							<div className="tab-pane active" id="m_widget2_tab1_content">
							{/*Begin::Timeline 3 */}
							<div className="m-timeline-3">
								<div className="m-timeline-3__items">
								<div className="m-timeline-3__item m-timeline-3__item--info">
									<span className="m-timeline-3__item-time">
									09:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Detartraj
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--warning">
									<span className="m-timeline-3__item-time">
									10:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Periaj
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--brand">
									<span className="m-timeline-3__item-time">
									11:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Tratament canal
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--success">
									<span className="m-timeline-3__item-time">
									12:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Tratament canal 2
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Samuel, 18 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--danger">
									<span className="m-timeline-3__item-time">
									14:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Detartraj
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--info">
									<span className="m-timeline-3__item-time">
									15:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
									Plomba
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--brand">
									<span className="m-timeline-3__item-time">
									17:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Operație
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								</div>
							</div>
							{/*End::Timeline 3 */}
							</div>
							<div className="tab-pane" id="m_widget2_tab2_content">
							{/*Begin::Timeline 3 */}
							<div className="m-timeline-3">
								<div className="m-timeline-3__items">
								<div className="m-timeline-3__item m-timeline-3__item--info">
									<span className="m-timeline-3__item-time">
									09:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Consultatie
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--warning">
									<span className="m-timeline-3__item-time">
									10:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Periaj
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--brand">
									<span className="m-timeline-3__item-time">
									11:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Consultatie canal
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--success">
									<span className="m-timeline-3__item-time">
									12:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Tratament canal 2
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Samuel, 18 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--danger">
									<span className="m-timeline-3__item-time">
									14:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Operatie
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--info">
									<span className="m-timeline-3__item-time">
									15:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
									Plomba
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Voicu Bogdan, 23 ani
										</a>
									</span>
									</div>
								</div>
								<div className="m-timeline-3__item m-timeline-3__item--brand">
									<span className="m-timeline-3__item-time">
									17:00
									</span>
									<div className="m-timeline-3__item-desc">
									<span className="m-timeline-3__item-text">
										Operație
									</span>
									<br />
									<span className="m-timeline-3__item-user-name">
										<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
										Tomoiu Dan-Cristian, 23 ani
										</a>
									</span>
									</div>
								</div>
								</div>
							</div>
							{/*End::Timeline 3 */}
							</div>
						</div>
						</div>
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