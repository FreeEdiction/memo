<template>
  <div>
  <div class="card-header header row">
    <div class="col-sm-2 logo">
      <img src="/src/assets/logo.png">
    </div>
    <div class="col-sm-10 header-text">
      MEMOSEEDS
    </div>
  </div>

  <div class="settings-form row">
    <div class="col-sm-5 info-part">
      <div class="user-photo">
      </div>
      <div class="modules-info">
        <p>Nuber of modules:</p>
        <label id="modules">{{modulesNumber}}</label>
      </div>
      <div class="credits-info">
        <p>Credits available:</p>
        <label id="credits">{{creditsNumber}}</label>
      </div>
      <a href="#" class="btn settings-btn" style="margin-bottom: 13px">GET CREDITS</a>
      <a href="#" class="btn settings-btn">CREATE MODULES</a>

    </div>
    <div class="col-sm-7 settings-part">
      <h4>EDIT ACCOUNT</h4>
      <form>
        <div class="form-group edit-group">
          <input type="text" class="form-control" id="edit-name"
                 placeholder="Name" v-model="name_edit" v-on:keyup="nameEdit"
                 v-bind:class="{not_ok: noNameOk}">
          <small id="nameError1" class="form-text text-muted" v-bind:class="{hidden: noNameOk}">Please
            enter name without numbers.
          </small>
          <input type="email" class="form-control" id="edit-email"
                 placeholder="Email" v-model="email">
          <input type="text" class="form-control" id="edit-phone"
                 placeholder="Phone number" v-model="phone" required v-on:keyup="phoneEdit"
                 v-bind:class="{not_ok: noPhoneOk}">
          <small id="phoneError1" class="form-text text-muted" v-bind:class="{not_ok: noPhoneOk}">Please enter
            phone number correctly.
          </small>
          <input type="password" class="form-control" id="edit-password"
                 placeholder="Old password" v-model="password" v-on:keyup="passwordEdit">
          <small id="passwordError" class="form-text text-muted" v-bind:class="{hidden: noPassOk}">Incorrect
            password.
          </small>
          <input type="password" class="form-control" id="edit-new-password"
                 placeholder="New password" v-model="password_new" required v-on:keyup="passwordEdit">
          <small class="form-text text-muted" v-bind:class="{hidden: noPassMatch}">New password can`t match
            new password.
          </small>
        </div>
        <button type="submit" class="btn save-btn" v-on:click="btnClick">SAVE</button>
      </form>
    </div>

  </div>

  <div class="card-footer footer">
    MEMOSEEDS INC., ALL RIGHTS RESERVED
  </div>
  </div>
</template>

<script>
  //import {router} from './router';
  export default {
    name: "Settings",
    data() {
      return {
        modulesNumber: 0,
        creditsNumber: 0,
        name_edit: "",
        email: "",
        phone: "",
        password: "",
        password_new: "",
        noNameOk: false,
        noPhoneOk: false,
        noPassOk: false,
        noPassMatch: false
      }
    },
    methods: {
      nameEdit: function () {
        this.noNameOk = false;
      },
      phoneEdit: function () {
        this.noPhoneOk = false;
      },
      passwordEdit: function () {
        this.noPassOk = false;
        this.noPassMatch = false;
      },
      nameChange: function () {
      },
      emailChange: function () {
      },
      phoneChange: function () {
      },
      passwordChange: function () {
      },
      checkName: function (data) {
        let nameReg = /^[a-zA-Z-а-яА-Яії'є\s]*$/;
        if (!nameReg.test(data))
          this.noNameOk = true;
      },
      checkPhone: function (data) {
        let phoneReg = /^[0-9+]/;
        if (!phoneReg.test(data))
          this.noPhoneOk = true;
      },
      btnClick: function () {
        if (this.name_edit != "") {
          this.checkName(this.name_edit);
          if (this.noNameOk == false)
            this.nameChange();
        }
        if (this.email != "")
          this.emailChange();
        if (this.phone != "") {
          this.checkPhone(this.phone);
          if (this.noPhoneOk == false)
            this.phoneChange();
        }
        if ((this.password != "") && (this.password_new != ""))
          this.passwordChange();
      }
    }
  }
</script>
<style>
  .header {
    background-color: #12496d;
    padding-top: 0;
    padding-bottom: 0;
  }

  .logo img{
    height: 70px;
    width: 70px;
  }

  .header-text {
    text-align: center;
    margin: auto;
    color: white;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 5px;
    margin-left: -80px;
  }

  a:hover {
    text-decoration: none;
    color: white;
  }

  .settings-btn {
    background-color: #f59699 !important;
    border-radius: 20px;
    font-size: 13px;
    color: white;
    width: 150px;
    height: 30px;
    margin-top: 10px;
  }

  .btn:hover {
    color: white !important;
    background: #f56e72 !important;
    text-decoration: none;
  }

  .settings-form {
    width: 600px;
    margin: auto;
    padding: 30px 0;
  }

  .info-part {
    background: #12496d;
    color: #ffffff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-top: 0;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    align-content: center;
  }

  .user-photo {
    margin: 30px auto;
    width: 110px;
    height: 110px;
    background-color: white;
    border-radius: 50%;
  }

  .info-part p {
    margin-bottom: 0;
  }

  .modules-info {
    margin-bottom: 10px;
  }

  .credits-info {
    margin-bottom: 10px;
  }

  .save-btn {
    border-color: white;
    border-radius: 20px;
    font-size: 13px;
    color: white;
    width: 130px;
    height: 30px;
  }

  .settings-part {
    background: #ffffff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    text-align: center;
  }

  .settings-part h4 {
    margin-top: 20px;
    margin-bottom: 15px;
    color: #12496d;
  }

  .settings-part .form-group {
    padding: 10px 45px;
    margin-bottom: 0 !important;
  }

  .settings-part .form-control {
    margin: 15px 0;
    background-color: #f5f6f7;
    height: 30px;
    border: none !important;
  }

  .form-group input::placeholder {
    color: #000000 !important;
    font-weight: 500 !important;
  }

  .settings-part .save-btn {
    background-color: #f59699 !important;
    border-radius: 20px;
    font-size: 13px;
    color: white;
    width: 150px;
    height: 30px;
    margin-top: -10px;
  }

  .settings-part button:hover {
    background-color: #f56e72 !important;
  }

  .footer {
    text-align: center;
    background-color: #bebfc0;
    color: white;
    letter-spacing: 5px;
  }
</style>
