<template>
<div class="container">
	<div class="row">
		 <h1><i class="fa fa-lock" aria-hidden="true"></i> Login</h1>
    </div>
    <br>
    <br>
    <div class="input-group">
		<div class="input-group-prepend">
			<span class="input-group-text"><i class="fas fa-user-tie"></i></span>
		</div>
		<input type="text" name="" class="form-control" placeholder="Username or Email"/>
	</div>
    <br >
    <div class="input-group">
		<div class="input-group-prepend">
			<span class="input-group-text"><i class="fa fa-key icon"></i></span>
		</div>
		<input type="Password" name="" class="form-control" placeholder="Password"/>
	</div>
    <br>
        <button type="submit" class="btn btn-danger"><span class="glyphicon glyphicon-off"></span> Login</button>
        <br />
               <br /> <center><div style="border:1px solid black;height:1px;width:300px;"></div></center><br />
        <div class="footer">
                  <p>Don't have an Account! <a href="/sign-up">Sign Up Here</a></p>
        </div>
 
	</div>
</template>
<style scoped>
 .container{
        border:2px solid black;
        text-align:center;
        
        height:400px;
        width:400px;
    }
    body{
        padding:70px;
    }
    h1{
        margin:auto;
    }
    .row{
        height:90px;
        width:396px;
        background-color:#b9154a;
    }
</style>