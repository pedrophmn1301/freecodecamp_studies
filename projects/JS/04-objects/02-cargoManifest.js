
//Criar Manifesto de carga:/
//Significa que é uma lista de mercadoreis sendo transportadas

const obj = {
    containerId: 68,
    destination: "Brazil",
    weight: 45,
    unit: "kg",
    hazmat: false
};

function normalizeUnits(manifest){
    const copy = { ...manifest };
    if(copy.unit === 'lb'){
        copy.weight = copy.weight * 0.45;
        copy.unit = 'kg';
    }
    return copy;
}

// console.log(normalizeUnits(obj));

function validateManifest(manifest){
    const errors = {};
    if (!manifest) {
        return { containerId: "Missing", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" };
    }
    if(!('containerId' in manifest)) 
        errors.containerId = "Missing";
    else if (!(typeof manifest.containerId === 'number' && Number.isInteger(manifest.containerId) && manifest.containerId > 0)) 
        errors.containerId = "Invalid";

    if (!('destination' in manifest)) 
        errors.destination = "Missing";
    else if (!(typeof manifest.destination === 'string' && manifest.destination.trim() !== '')) 
        errors.destination = "Invalid";

    if (!('weight' in manifest)) 
        errors.weight = "Missing";
    else if (!(typeof manifest.weight === 'number' && !isNaN(manifest.weight) && manifest.weight > 0)) 
        errors.weight = "Invalid";

    if (!('unit' in manifest)) 
        errors.unit = "Missing";
    else if (!(manifest.unit === 'kg' || manifest.unit === 'lb')) 
        errors.unit = "Invalid";

    if (!('hazmat' in manifest)) 
        errors.hazmat = "Missing";
    else if (!(typeof manifest.hazmat === 'boolean')) 
        errors.hazmat = "Invalid";

    return errors;
}

// console.log(validateManifest(obj));

function processManifest(manifest) {
    const errors = validateManifest(manifest);
    if (Object.keys(errors).length === 0) {
        console.log(`Validation success: ${manifest.containerId}`);
        const normalized = normalizeUnits(manifest);
        console.log(`Total weight: ${normalized.weight} kg`);
    }else {
        console.log(`Validation error: ${manifest?.containerId}`);
        console.log(errors);
  }
}

processManifest(obj);