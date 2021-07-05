@extends('layouts.master-layouts')

@section('title')
register
@endsection
@section('body')

<body class="index-background" data-layout="horizontal">
    <div id="preloader">
        <div id="status">
            <div class="spinner-chase">
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
            </div>
        </div>
    </div>
    @endsection
    @section('content')

    <div class="account-pages my-5 pt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div>
                    <form id="register_form" method="POST" action="/auth-register">
                        {{ csrf_field() }}
                        <div class="row">
                            <div class="col-md-12">
                                <div style="background:#30200ac7;width:100%">
                                    <div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-primary p-4">
                                                    <h6 class="title-font title-color">Account Detail</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-body pt-0 title-color">
                                        <div id="error_div">

                                        </div>


                                        <div class="p-2">

                                            <div class="form-group" id="email_input">
                                                <label for="email">Your Email Address<span class="text-danger">*</span></label>
                                                <input type="email" class="form-control" value="{{ old('email') }}" name="email" id="email" placeholder="Enter email" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="password">Password<span class="text-danger">*</span></label>
                                                <input type="password" class="form-control" value="{{ old('password') }}" name="password" id="password" placeholder="Enter password" required>
                                                <span style="color:black;padding-right:23px" toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                            </div>
                                            <div class="form-group">
                                                <label for="verify_password">Verify Password<span class="text-danger">*</span></label>
                                                <input type="password" class="form-control" value="{{ old('verify_password') }}" name="verify_password" id="verify_password" placeholder="Enter Verify Password" required>
                                                <p id="match_password" class="text-danger">Password is not matched!</p>
                                            </div>
                                            <div class="mt-4 form-group">
                                                <button class="btn btn-primary btn-block waves-effect waves-light title-font" type="button" style="font-size:1.5rem" onclick="Register()">CREATE ACCOUNT</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div style='position:relative; top:-28px; left:35%'>
                        <a id="phone_login" href="/auth-register/phone">login with phone</a>
                    </div>
                    <div class="mt-5 text-center">
                        <p style="color:white;">Already have an account ? <a href="auth-login" class="font-weight-medium title-color">
                                Login</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- The Modal -->
    <div class="modal fade" id="verifyModal" data-keyboard="false" data-backdrop="static" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Enter OTP</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p id="resend_msg" style="text-align:center;color:green;"></p>
                    <p id="error_msg" style="text-align:center;color:green;"></p>
                    <div class="text-center">
                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                            <input class="input100" type="text" id="otp" name="otp" placeholder="OTP" maxlength="6">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div class="container-login100-form-btn">
                            <button class="btn btn-primary" id="otp_submit">
                                Submit
                            </button>
                        </div>
                        <div class="container-login100-form-btn">
                            <button class="btn btn-info" id="otp_resend">
                                Resend
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Modal footer -->


            </div>
        </div>
    </div>



    @endsection

    @section('script')
    <!-- Plugin Js-->
    <script src="{{ URL::asset('assets/libs/apexcharts/apexcharts.min.js') }}"></script>

    <script src="{{ URL::asset('assets/js/pages/dashboard.init.js') }}"></script>
    <script>
        $(document).ready(function() {
            console.log(location.search)
            if (location.search) {
                var referrer_id = location.search.split('=')[1];
                $('#referrer').val(referrer_id);
            }
            $(".toggle-password").click(function() {

                $(this).toggleClass("fa-eye fa-eye-slash");
                var input = $($(this).attr("toggle"));
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });

            $("#match_password").hide();
            $('#password').keyup(function() {
                MatchPassword();
            })
            $('#verify_password').keyup(function() {
                MatchPassword();
            })

            $("#otp_submit").click(function() {
                $.ajax({
                    type: "POST",
                    url: "/auth-register/verify-number",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        otp: $('#otp').val(),
                        verify_number: window.localStorage.getItem('key')

                    },
                    success: function(dataResult) {
                        if (dataResult == 'success') {
                            $("#verifyModal").modal('hide');
                            $("#verified").show();
                            $('#register_form').submit();
                        } else if (dataResult == 'fail') {
                            $("#error_msg").html('Invalid OTP !');
                        }

                    }
                });
            });
            $("#otp_resend").click(function() {
                $.ajax({
                    type: "POST",
                    url: "/auth-register/resend-number",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        phone_number: $('#phone_number').val(),
                    },
                    success: function(dataResult) {
                        if (dataResult == 'success') {
                            var dataResult = JSON.parse(dataResult);
                            if (dataResult.status == 'fail') {
                                displayValidationError(dataResult.data)
                            } else {
                                $("#resend_msg").html('OTP Resend Successfully !');
                                window.localStorage.removeItem('key');
                                window.localStorage.setItem('key', dataResult);
                            }
                            
                        }
                    }
                });
            });
        })

        function MatchPassword() {
            if ($('#password').val() != $('#verify_password').val()) {
                $("#match_password").show();
            } else {
                $("#match_password").hide();
            }
        }

        function Register() {
            password = $('#password').val();
            verify_password = $('#verify_password').val();
            if (password == '') {
                alert('Input password!');
                return;
            }

            if (password != verify_password) {
                $("#match_password").show();
                return;
            }
            console.log('sdf')
            $.ajax({
                type: "POST",
                url: "/auth-register/email/send-number",
                data: {
                    "_token": "{{ csrf_token() }}",
                    email: $('#email').val(),
                },
                success: function(dataResult) {

                    var dataResult = JSON.parse(dataResult);

                    if (dataResult.status == 'fail') {
                        displayValidationError(dataResult.data)
                    } else {
                        alert('Sent verification code successfully!');
                        $("#verifyModal").modal('show');
                        window.localStorage.setItem('key', dataResult);
                    }
                }
            });

        }

        function displayValidationError(dataResult) {
            console.log('dataResult.data');
            console.log(dataResult);
            if (dataResult) {
                if (dataResult.email && dataResult.email.length > 0) {
                    dataResult.email.forEach(item => {
                        $('#error_div').append(`<label class="error">${item}</label>`)
                    })
                }
            }
        }
    </script>
    @endsection