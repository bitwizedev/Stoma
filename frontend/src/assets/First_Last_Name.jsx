import React, { useState } from "react";
import "../assets/vendors/base/vendors.bundle.css";
import "../assets/demo/default/base/style.bundle.css";

export default function FirstandLastname() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
      <div class="m-wizard__form-step m-wizard__form-step--current" id="m_wizard_form_step_1">
															<div class="m-form__section m-form__section--first">
																<div class="m-form__heading">
																	<h3 class="m-form__heading-title">
																		Informatii pacient
																	</h3>
																</div>
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Nume:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="name" class="form-control m-input" placeholder="" value="Nick Stone"/>
																		<span class="m-form__help">
																		Va rog completati numele si prenumele dumneavoastra
																		</span>
																	</div>
																</div>														
                                </div>			
                                </div>						
      </form>
    </div>
  );
}