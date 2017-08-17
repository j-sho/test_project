export const isNameInput = {
  computed: {
    isNameShowError () {
      return (this.user_input.name_input_active &&
             (!this.user_input.name || !this.user_input.surname))
    }
  }
}

function isNameValid (name) {
  return (/^[A-Za-z]+$/.test(name) && (name.length > 3))
}

function checkEmail (email) {
  return /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

export const isNameShowValidError = {
  computed: {
    isNameShowValidError () {
      return (this.user_input.name_input_active && !this.isNameShowError &&
             (!isNameValid(this.user_input.name) || !isNameValid(this.user_input.surname)))
    }
  }
}

export const isEntryOptions = {
  computed: {
    isEntryOptions () {
      return this.user_input.entry_options.length > 0
    }
  }
}

export const isDomainValid = {
  computed: {
    isDomainValid () {
      if (this.user_input.domain_name_active) {
        return checkEmail(this.user_input.domain_name)
      } else {
        return true
      }
    }
  }
}

export const showInstalationDetails = {
  computed: {
    showInstalationDetails () {
      return this.user_input.installation === '2'
    }
  }
}

export const isErrors = {
  computed: {
    isErrors () {
      return (!isNameValid(this.user_input.name) ||
              !isNameValid(this.user_input.name) ||
              !this.isEntryOptions || !this.user_input.name ||
              !this.user_input.surname || !this.user_input.computer_quantity ||
              !this.user_input.mobile_quantity || !this.user_input.instalation_date ||
              !this.user_input.instalation_time || !this.isDomainValid)
    }
  }
}

export const isEmailValid = {
  computed: {
    isEmailValid () {
      return checkEmail(this.user_email)
    }
  }
}

export const isNumberValid = {
  computed: {
    isNumberValid () {
      return /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10}$/.test(this.user_contact_mobile)
    }
  }
}

export const isContactErrors = {
  computed: {
    isErrors () {
      return (!this.user_email || !this.isEmailValid || !this.isNumberValid)
    }
  }
}
