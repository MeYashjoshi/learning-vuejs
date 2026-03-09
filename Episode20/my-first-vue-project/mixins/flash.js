import swal from 'sweetalert'

export default {
  methods: {
    falsh(message) {
      return swal('Success!', message, 'success')
    },
  },
}
