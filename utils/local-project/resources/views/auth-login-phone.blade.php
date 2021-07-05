@extends('layouts.master-layouts')

@section('title')
login
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
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card overflow-hidden" style="background:#30200ac7">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-primary p-4">
                                    <h5 class="title-font title-color">Welcome Back !</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="p-2 title-color">
                                <form class="form-horizontal" method='post' action="/auth-login/phone">
                                    {{ csrf_field() }}
                                    <div class="form-group">
                                        <label for="phone">phone<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter username" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="userpassword">Password<span class="text-danger">*</span></label>
                                        <input type="password" class="form-control" name="password" id="password-field"  placeholder="Enter password" required>
                                        <span style="color:black;padding-right:23px" toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    </div>
                                   

                                    <div class="mt-3">
                                        <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                    </div>


                                    <div class="mt-4 text-center" style="color:white">
                                        <a href="/auth-login/reset-phone"><i class="mdi mdi-lock mr-1"></i>
                                            Forgot your password?</a>
                                            <a href="/auth-login"><i class="mdi mdi-lock mr-1"></i>
                                            Login with email</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p style="color:white">Don't have an account ? <a href="/auth-register" class="font-weight-medium title-color">
                                Signup now </a> </p>
                    </div>

                </div>
            </div>
        </div>
    </div>


    @endsection

    @section('script')
    <!-- Plugin Js-->
    <script src="{{ URL::asset('assets/libs/apexcharts/apexcharts.min.js') }}"></script>

    <script src="{{ URL::asset('assets/js/pages/dashboard.init.js') }}"></script>
    <script>
        $(".toggle-password").click(function() {

            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    </script>
    @endsection