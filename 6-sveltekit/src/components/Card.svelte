<script>
    export let offer;
    export let onClick = () => {};
    
    console.log('rendering Card', offer.id);
</script>

<div class="card m-3">
    <img src={offer.imageUrl} class="card-img-top" width="100%"/>
    <div class="card-body pt-0 px-0">
        <div class="d-flex flex-row justify-content-between mb-0 px-3">
            <small class="text-muted mt-1">STARTING AT</small>
            <h6>${offer.price}*</h6>
        </div>
        <hr class="mt-2 mx-3"/>
        <div class="d-flex flex-row justify-content-between px-3 pb-4">
            <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span>
                <small class="text-muted">L/100KM*</small>
            </div>
            <div class="d-flex flex-column">
                <h5 class="mb-0">{offer.fuelEfficiencyCity}/{offer.fuelEfficiencyHwy}</h5>
                <small class="text-muted text-right">(city/Hwy)</small>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-between p-3 mid">
            <div class="d-flex flex-column">
                <small class="text-muted mb-1">ENGINE</small>
                <div class="d-flex flex-row">
                    <img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"/>
                    <div class="d-flex flex-column ml-1">
                        {#each offer.engine as e}
                            <small class="ghj">{e}</small>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <small class="text-muted mb-2">HORSEPOWER</small>
                <div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"/>
                    <h6 class="ml-1">{offer.horsepower} hp*</h6>
                </div>
            </div>
        </div>
        <small class="text-muted key pl-3">Standard key Features</small>
        <div class="mx-3 mt-3 mb-2">
            <button type="button" class="btn btn-danger btn-block"
                    onClick={onClick}>
                <small>BUILD & PRICE</small>
            </button>
        </div>
        <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
</div>
