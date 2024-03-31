<x-layout>
    @if(session('message'))
    <div class="alert alert-success">
        {{session('message')}}
    </div>
    @endif
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1>
                    Benvenuti su TRY1
                </h1>
            </div>
        </div>
    </div>
</x-layout>