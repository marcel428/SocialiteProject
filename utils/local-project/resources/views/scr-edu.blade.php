@extends('layouts.master-layouts')

@section('title')
@lang('translation.Preloader')
@endsection
@section('css')
<link href="https://cdn.jsdelivr.net/gh/bbbootstrap/libraries@main/smart_wizard.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/gh/bbbootstrap/libraries@main/smart_wizard_theme_dots.min.css" rel="stylesheet" type="text/css" />
<style>
    body {
        background-color: #eee
    }

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0rem rgba(0, 123, 255, .25)
    }

    .btn-secondary:focus {
        box-shadow: 0 0 0 0rem rgba(108, 117, 125, .5)
    }

    .close:focus {
        box-shadow: 0 0 0 0rem rgba(108, 117, 125, .5)
    }

    .mt-200 {
        margin-top: 200px
    }

    .checkbox-size {
        margin-left: 30px;
        transform: scale(2.0)
    }
</style>
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

    <div class="mainbodybgdailygift">

        <div class="container">
            <div class="row d-flex justify-content-center mt-200"> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Start SCB </button> </div> <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Smart Wizard modal</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" action="scr-super/add">
                                {{ csrf_field() }}
                                <div id="smartwizard">
                                    <ul style="justify-content:center">
                                        <li><a href="#step-1">step-1</a></li>
                                        <li><a href="#step-2">step-2</a></li>
                                        <li><a href="#step-3">step-3</a></li>
                                        <li><a href="#step-4">step-4</a></li>
                                        <li><a href="#step-5">step-5</a></li>
                                        <li><a href="#step-6">step-6</a></li>
                                    </ul>
                                    <div>

                                        <div id="step-1" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    1. Child`s details
                                                </h5>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            First Name(s)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="firstName" placeholder="First Name">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Surname
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="lastName" placeholder="Surname">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Date of Birth
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="date" id="birthDateOfChild" name="birthDateOfChild">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Gender
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="childMale" name="childGender" value="Male" checked="checked">
                                                        <label for="childMale">Male</label>
                                                        <input type="radio" id="childFmale" name="childGender" value="Female">
                                                        <label for="childFmale">Female</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Relationship
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="relationship" placeholder="Relationship">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="step-2" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    2. Principal Life to be Assured
                                                </h5>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            First Name(s)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="2_firstName" placeholder="First Name">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Surname
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="2_lastName" placeholder="Surname">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            ID Number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="2_idNumber" placeholder="ID Number">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Passport Number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="2_passportNumber" placeholder="Passport Number">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Title
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" class="form-control" name="2_title" placeholder="Title">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Marital Status
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="married" name="2_maritalStatus" value="Married" checked="checked">
                                                        <label for="married">Married</label>
                                                        <input type="radio" id="single" name="2_maritalStatus" value="Single">
                                                        <label for="single">Single</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Date of Birth
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="date" id="birthDate" name="2_birthDate">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Gender
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="male" name="2_gender" value="Female" checked="checked">
                                                        <label for="married">Male</label>
                                                        <input type="radio" id="female" name="2_gender" value="Male">
                                                        <label for="female">Female</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Occupation
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_occupation" placeholder="Occupation">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Pin Number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_pinNumber" placeholder="Pin Number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Nationality
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_nationality" placeholder="Nationality">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Tax Identification Number (TIN)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_tin" placeholder="Tax Identification Number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Citizenship
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_citizenship" placeholder="Citizenship">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Residency
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_residency" placeholder="Residency">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.1. Employment Details
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Employed
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="employed" name="2_1_employed" value="Yes" checked="checked">
                                                        <label for="employed">Yes</label>
                                                        <input type="radio" id="notEmployed" name="2_1_employed" value="No">
                                                        <label for="notEmployed">No</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Employer
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_1_employer" placeholder="Employer">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Employer Code
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_1_employerCode" placeholder="Employer Code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Department Code
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_1_departmentCode" placeholder="Department Code">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Employee Terms
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="temporary" name="2_1_employeeTerms" value="Temporary" checked="checked">
                                                        <label for="temporary">Temporary</label>
                                                        <input type="radio" id="permanent" name="2_1_employeeTerms" value="Permanent">
                                                        <label for="permanent">Permanent</label>
                                                        <input type="radio" id="contract" name="2_1_employeeTerms" value="Contract">
                                                        <label for="contract">Contract</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Employer Number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_1_employerNumber" placeholder="Employer Number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.2. Business Details
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Business Name
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_2_businessName" placeholder="Business Name">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-12">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Nature of Business
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_2_natureOfBusiness" placeholder="Nature of Business">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-12">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Role of proposer in business
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_2_properBusiness" placeholder="Role of proposer in business ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.3. Telephone Numbers and Email
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Cell (Pre-fix for other countries)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_3_cell" placeholder="Cell (Pre-fix for other countries)">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Work Phone
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_3_workPhone" placeholder="Work Phone">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        <label>
                                                            Home Phone
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_3_homePhone" placeholder="Home Phone">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Email Address
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_3_emailAddress" placeholder="Email Address">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.4. Postal Address
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            P.O. Box
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_4_poBox" placeholder="P.O. Box">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Building
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_4_building" placeholder="Building">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Town
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_4_town" placeholder="Town">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Postal Code
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_4_postalCode" placeholder="Postal Code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.5. Physical Address
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Building / Village
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_5_physicalBuilding" placeholder="Building / Village">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Street / Location
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_5_physicalStreet" placeholder="Street Location">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Town / County
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_5_physicalTown" placeholder="Town / County">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Postal Code
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_5_physicalPostalCode" placeholder="Postal Code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    2.6. USA Physical Address (For USA citizens only)
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Street
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_6_usaStreet" placeholder="Street ">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Town / City
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_6_usaTown" placeholder="Town / City">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Region / State
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_6_usaRegion" placeholder="Region / State">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Postal Code
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="2_6_usaPostalCode" placeholder="Postal Code">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="step-3" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    3. Statement of Health of the Life Assured
                                                </h5>
                                                <p>This section covers your medical history. Please read the following questions and provide as much information as possible. </p>
                                            </div>
                                            <div>

                                                <ol>
                                                    <li>
                                                        Has an application for life, sickness, disability, or critical illness insurance on your life ever been declined, deferred withdrawn or accepted with a loading or exclusion?
                                                        Y/N
                                                        <input type="text" name="3_1" style="width:3%">
                                                    </li>
                                                    <li>
                                                        Have you ever claimed any benefit from sickness, disability, critical illness, or accident policies?
                                                        Y/N
                                                        <input type="text" name="3_2" style="width:3%">
                                                    </li>
                                                    <li>
                                                        Have you in the last 5 years: consulted any medical professionals; had medical examinations and/or special investigations (including blood tests); taken medication or received medical treatment; been hospitalized or received medical advice to alter or discontinue your alcohol consumption?
                                                        Y/N
                                                        <input type="text" name="3_3" style="width:3%">
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Have you, in the last 5 years, suffered from or been diagnosed with any form of: (Tick appropriately)
                                                        </p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_1" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                blindness, hearing or speech problems asthma, tuberculosis, chronic cough.
                                                            </div>
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_2" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                heart attack, heart disease or disorder, high blood pressure, raised cholesterol diabetes, stroke.
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_3" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                cancer, tumors (state of benign or malignant)
                                                            </div>
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_4" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                kidney disease, blood, or protein in the urine
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_5" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                HIV/AIDS or HIV/AIDS related conditions, Sexually Transmitted Diseases (STDs)
                                                            </div>
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_6" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                psychological problems or disability
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_7" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                Body or limb defects, paralysis, physical disability
                                                            </div>
                                                            <div class="col-md-1">
                                                                <input type="text" name="3_4_8" style="width:70%">
                                                            </div>
                                                            <div class="col-md-5">
                                                                any condition other than colds, flu or other minor, curable ailments
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        Are you currently experiencing health-related symptoms, or do you intend to seek medical advice or testing for any condition other than colds, flu or other minor, curable ailments in the next 6 months?
                                                        Y/N
                                                        <input type="text" name="3_5" style="width:3%">
                                                    </li>
                                                    <li>
                                                        What is your height? (Ft, Ins)
                                                        <input type="text" name="3_5_height" style="width:10%">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        What is your weight? (Kgs)
                                                        <input type="text" name="3_5_weight" style="width:10%">
                                                        <br>
                                                        Is your weight
                                                        <input type="radio" id="stationary" name="3_5_weightStatus" value="Stationary" checked="checked">
                                                        <label for="stationary">Stationary</label>
                                                        <input type="radio" id="increasing" name="3_5_weightStatus" value="Increasing">
                                                        <label for="increasing">Increasing</label>
                                                        <input type="radio" id="decreasing" name="3_5_weightStatus" value="Decreasing">
                                                        <label for="decreasing">Decreasing</label>
                                                    </li>
                                                    <li>
                                                        If you answered ‘yes’ to any of the questions, please give full details in the table below indicating: -
                                                    </li>
                                                </ol>
                                                <div>
                                                    <div>
                                                        <strong>
                                                            Nature of complaint or symptoms, Type of treatment or medication, Date of first symptoms or diagnosis, Date of last symptoms, Name, and telephone number of attending doctor
                                                        </strong>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="3_7_1">
                                                    </div>
                                                    <div>
                                                        <strong>
                                                            You may use additional Paper for more information.
                                                        </strong>
                                                    </div>
                                                    <div>
                                                        You are required to tell us anything that you may know about your health that may affect our decision to insure you. If you do not provide this information, you may not be able to claim the risk benefits under this policy. Please use the space below to provide such information
                                                    </div>
                                                    <div>
                                                        <input type="text" name="3_7_2">
                                                    </div>
                                                    <div>
                                                        <strong>
                                                            You may use additional Paper for more information
                                                        </strong>
                                                    </div>
                                                    <div>
                                                        I declare that the information I have given above is correct and a true representation of my medical history. I understand that any medical history not mentioned may invalidate the application for life assurance or a claim.
                                                    </div>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div>
                                                                <label>
                                                                    Name
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <input type="text" name="3_7_3" placeholder="Name">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div>
                                                                <label>
                                                                    Date
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <input type="date" name="3_7_4">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="step-4" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    4. Financial Questionnaire
                                                </h5>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        Weekly Income
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_weeklyIncome" placeholder="Weekly Income">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        Monthly Income
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_monthlyIncome" placeholder="Monthly Income ">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        Source of Income
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_sourceOfIncome" placeholder="Source of Income ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    4.1. Occupational and Recreational Hazard
                                                </h6>
                                                <p>
                                                    Do you have any intentions of (where the answer is YES, please give details)
                                                </p>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-10">
                                                    A) Changing the nature of your occupation?
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" name="4_1_1" style="width:24%">
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-10">
                                                    B) Engaging in hazardous occupation? (e.g., working with machinery or electricity)
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" name="4_1_2" style="width:24%">
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-10">
                                                    C) Engaging in hazardous sports or pastime? (e.g., hang gliding, sky diving, mining etc.)
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" name="4_1_3" style="width:24%">
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-10">
                                                    D) Engaging in naval, military or air services?
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" name="4_1_4" style="width:24%">
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-10">
                                                    E) Flying other than as a fare paying passenger by a recognized airline on scheduled in routes
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="text" name="4_1_5" style="width:24%">
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    4.2. Insurance History
                                                </h6>

                                            </div>
                                            <div>
                                                Has any proposal on your life ever been made, or is now being made (excluding this application)? If YES, please state:
                                                <input type="text" style="width:3%">
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Name of the Insurer(s)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_2_nameOfInsure" placeholder="Name of the Insurer(s)">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Date of proposal
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="date" name="4_2_dateOfProposal">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Sum assured
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_2_sumAssured" placeholder="Sum assured ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Was it accepted at?
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="ordinaryTerm" name="4_2_acceptedAt" value="Ordinary Term" checked="checked">
                                                        <label for="ordinaryTerm">Ordinary Term</label>
                                                        <input type="radio" id="declinedOrLoaded" name="4_2_acceptedAt" value="Declined or Loaded">
                                                        <label for="declinedOrLoaded">Declined or Loaded</label>
                                                        <input type="radio" id="postponed" name="4_2_acceptedAt" value="Postponed">
                                                        <label for="postponed">Postponed</label>
                                                        <input type="radio" id="specialPremium" name="4_2_acceptedAt" value="Special Premium">
                                                        <label for="specialPremium">Special Premium</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Status:
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="matured" name="4_2_1" value="Matured" checked="checked">
                                                        <label for="matured">matured</label>
                                                        <input type="radio" id="inForce" name="4_2_1" value="In Force">
                                                        <label for="inForce">In Force</label>
                                                        <input type="radio" id="lapsed" name="4_2_1" value="Lapsed">
                                                        <label for="lapsed">Lapsed</label>
                                                        <input type="radio" id="surrender " name="4_2_1" value="Surrender">
                                                        <label for="surrender ">Surrender </label>
                                                        <input type="radio" id="cancelled " name="4_2_1" value="Cancelled">
                                                        <label for="cancelled ">Cancelled </label>
                                                        <input type="radio" id="other " name="4_2_1" value="Other">
                                                        <label for="other ">Other </label>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="text" name="4_2_2">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center mt-3">
                                                <h6>
                                                    4.3. Plan Details
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Payment Method
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="clickOff" name="4_3_paymentMethod" value="Check-off" checked="checked">
                                                        <label for="clickOff">Check-off </label>
                                                        <input type="radio" id="directDebit" name="4_3_paymentMethod" value="Direct Debit">
                                                        <label for="directDebit">Direct Debit</label>
                                                        <input type="radio" id="standingOrder" name="4_3_paymentMethod" value="Standing Order">
                                                        <label for="standingOrder">Standing Order</label>
                                                        <input type="radio" id="cheques" name="4_3_paymentMethod" value="Cheques ">
                                                        <label for="cheques">Cheques</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Premium Payment Frequency
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="monthly" name="4_3_paymentFrequency" value="Monthly" checked="checked">
                                                        <label for="monthly">Monthly</label>
                                                        <input type="radio" id="querterly" name="4_3_paymentFrequency" value="Querterly">
                                                        <label for="querterly">Querterly</label>
                                                        <input type="radio" id="semiAnually" name="4_3_paymentFrequency" value="Semi Annually">
                                                        <label for="semiAnually">Semi Annually</label>
                                                        <input type="radio" id="Annually" name="4_3_paymentFrequency" value="Annually ">
                                                        <label for="Annually">Annually</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Direct Debit Instruction Date
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="date" name="4_3_debitInstructionDate">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Policy Term
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_3_policyTerm" placeholder="Policy Term">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Premium Payable
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_3_premiumPayable" placeholder="Premium Payable">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Initial Premium Payment Account Number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_3_initialPremiumPaymentAccountNumber" placeholder="Initial Premium Payment Account Number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div>
                                                        <label>
                                                            Regular premium payment account number
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_3_regularPremiumPaymentAccountNumber" placeholder="Regular premium payment account number ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    4.4. Premium Calculator
                                                </h6>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-1">
                                                    <div>
                                                        <label>
                                                            ANB
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_anb" placeholder="ANB">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div>
                                                        <label>
                                                            Term
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_term" placeholder="Term">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div>
                                                        <label>
                                                            Rate
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_rate" placeholder="Rate">
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div>
                                                        <label>
                                                            Sum Assured
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_sumAssured" placeholder="Sum Assured">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <label>
                                                            Monthly Premium
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_monthlyPremium" placeholder="Monthly Premium">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <label>
                                                            Non-Monthly Premium
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium" placeholder="Non-Monthly Premium">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-3">
                                                    <div>
                                                        <label>
                                                            Discount on Non-Monthly
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <select name="4_4_discountOnNonMonthly">
                                                        <option value="0.04">Q-4%</option>
                                                        <option value="0.06">SA-6%</option>
                                                        <option value="0.08">A-8%</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        -<input type="text" name="4_4_monthlyPremium_1">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Sub Total:
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        =<input type="text" name="4_4_monthlyPremium_2">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Policy Fee
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        -<input type="text" name="4_4_monthlyPremium_3">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_3">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Sub Total:
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        =<input type="text" name="4_4_monthlyPremium_4">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            0.5 % Training levy
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        -<input type="text" name="4_4_monthlyPremium_5">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_5">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        <label>
                                                            Total Premium DUE
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        =<input type="text" name="4_4_monthlyPremium_6">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div>
                                                        <input type="text" name="4_4_nonMonthlyPremium_6">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-3">
                                                    <div>
                                                        <label>
                                                            Premium in Words
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-9">
                                                    <div>
                                                        <input type="text" name="4_4_premiumInWords" placeholder="Premium in Words">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="step-5" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    5. Guardian
                                                </h5>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        First Name(s)
                                                        <input type="text" name="5_firstName">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        <div>
                                                            Surname
                                                            <input type="text" name="5_surname">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-4">
                                                    <div>
                                                        Date of Birth
                                                        <input type="date" name="5_dateOfBirth">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        Gender
                                                        <input type="radio" id="5_male" name="5_gender" value="Female" checked="checked">
                                                        <label for="5_male">Male</label>
                                                        <input type="radio" id="5_female" name="5_gender" value="Male">
                                                        <label for="5_female">Female</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div>
                                                        Relationship to minor
                                                        <input type="text" name="5_relationshipToMinor">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div>
                                                        Title
                                                        <input type="text" name="5_title">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>
                                                        Cell
                                                        <input type="text" name="5_cell">
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                How would you like to receive your statement/Policy document? (Tick One)
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-3">
                                                    Postal Address
                                                </div>
                                                <div class="col-md-9">
                                                    <input type="radio" id="5_email" name="5_postalAddress" value="Email" checked="checked">
                                                    <label for="5_email">Email</label>
                                                    <input type="radio" id="5_physicalAddress" name="5_postalAddress" value="Physical Address">
                                                    <label for="5_physicalAddress">Physical Address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="step-6" class="mt-3">
                                            <div class="text-center">
                                                <h5>
                                                    6. Disclosure Checklist
                                                </h5>
                                            </div>
                                            <div>
                                                The policyholder has the right to the following information. Kindly confirm that this has been provided.
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    6.1. Agent Status (Please enter your “Y” for Yes or “N” for No)
                                                </h6>
                                            </div>
                                            <div>
                                                <div class="row mt-2">
                                                    <div class="col-md-10">
                                                        1. Have you provided the following information to the policyholder?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_1_1" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        a) Your full name and title?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_1_1_a" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        b) Office details (physical and postal address)?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_1_1_b" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        c) Telephone and email contact details?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_1_1_c" style="width:30%">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    6.2. Advice
                                                </h6>
                                            </div>
                                            <div>
                                                <div class="row mt-2">
                                                    <div class="col-md-10">
                                                        1. Have you taken the circumstances of the policyholder into account in-order to satisfy their financial needs
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_1" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        b) Have you done a sufficient needs analysis?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_1_b" style="width:30%">
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="row mt-2">
                                                    <div class="col-md-10">
                                                        2. Have you disclosed the following information to the policy holder?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        a) Name and type of policy?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_a" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        b) The premium?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_b" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        c) Type, extent, and limitations of benefits?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_c" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        d) That commission is payable on this policy and answered any commission-related questions?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_d" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        e) The 28-day cooling-off period?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_e" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        f) Claims notification procedure?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_f" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        g) Cancellation procedure and surrender?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_2_2_g" style="width:30%">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-center mt-3">
                                                <h6>
                                                    6.3. Application Stage
                                                </h6>
                                            </div>
                                            <div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        a) Is the policyholder satisfied with the advice and disclosure that you have given?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_3_a" style="width:30%">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-1">
                                                    </div>
                                                    <div class="col-md-9">
                                                        b) Has the policyholder completed and signed the application form?
                                                    </div>
                                                    <div class="col-md-2">
                                                        <input type="text" name="6_3_b" style="width:30%">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-3">
                                                <h6>
                                                    6.4. New business Rater
                                                </h6>
                                            </div>
                                            <div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        A. Gross Regular/Basic Earnings
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_a">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_a_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        B. Total Existing Deductions
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_b">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_b_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        C. Premium for New Policy
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_c">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_c_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        D. Total Deductions (B + C)
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_d">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_d_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        E. New Net Earnings
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_e">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_e_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        F. 1/3 of A
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="6_4_f">
                                                    </div>
                                                    <div class="col-md-4">
                                                        UGX
                                                        <input type="text" name="6_4_f_amount">
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-4">
                                                        G. Test: Is E>F
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="6_4_g" style="width:3%">
                                                        Y/N, if NO, the application does not qualify
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="text-center mt-4">
                                                <input type="submit" value="save">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    @endsection

    @section('script')
    <!-- Plugin Js-->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bbbootstrap/libraries@main/jquery.smartWizard.min.js"></script>

    <script>
        $(document).ready(function() {

            $('#smartwizard').smartWizard({
                selected: 0,
                theme: 'dots',
                autoAdjustHeight: true,
                transitionEffect: 'fade',
                showStepURLhash: false,

            });

        });
    </script>
    @endsection