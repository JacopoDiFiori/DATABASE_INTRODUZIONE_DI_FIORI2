<x-layout>
<div class="container">
<div class="row">
<div class="col-12 col-md-7">

<form method="POST" action="{{route('song.store')}}">

@csrf

<div class="mb-3">
<label for="songName" class="form-label">nome canzone</label>
<input name="songName" type="text" class="form-control" id="songName" 
</div>

<div class="mb-3">
<label for="artist" class="form-label">artista</label>
<input name="artist" type="text" class="form-control" id="artist" 
</div>

<div class="mb-3">
<label for="duration" class="form-label">durata in minuti per difetto</label>
<input name="duration" type="number" class="form-control" id="duration" 
</div>

<div class="mb-3">
<label for="year" class="form-label">anno di pubblicazione</label>
<input name="year" type="string" class="form-control" id="year" 
</div>


<button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
</div>
</div>
</x-layout>