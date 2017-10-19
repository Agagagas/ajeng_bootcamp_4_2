<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    function GetStudent(Request $req){
        DB::beginTransaction();
        try{
            $this->validate($req, [
                'mahasiswa_id' => 'required',
                'nama' => 'required',
            ]);
            $mahasiswaId = $req->input('mahasiswa_id');
            $nama = $req->input('nama');
            DB::insert('insert into mahasiswa (id, nama) values (?, ?)', [$mahasiswaId, $nama]);
            DB::update('update mahasiswa (id, nama) values (?, ?)', [$mahasiswaId, $nama]);
            DB::commit();
            return response()->json(['message' => 'created'], 201);
        }
        catch(\Exception $e){
            DB::rollback();
            return response()->json(['message' => 'Failed to create or update student data, exception:'+$e], 500);
        }
    }
}
