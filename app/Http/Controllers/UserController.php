<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $data = $request->only('name','email','password','phone');

        $validator = Validator::make($data,[
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:50',
            'phone' => 'required|string|min:10'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->messages()], 200);
        }

        $user = User::create([
            'name' => $request->name,
            'email'=> $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'data' => $user
        ], Response::HTTP_OK);
    }

    public function login(Request $request){
        $credentials = $request->only('email','password');

        $validator = Validator::make($credentials,[
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->messages()], 200);
        }

        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json([
                    'success' => false,
                	'message' => 'Login credentials are invalid.',
                ], 400);
            }
        } catch(JWTException $e) {
                return response()->json([
                        'success' => false,
                        'message' => 'Could not create token.',
                    ], 500);
        }

        return response()->json([
            'success' => true,
            'token' => $token,
            'credentials' => $credentials
        ]);
    }
}
