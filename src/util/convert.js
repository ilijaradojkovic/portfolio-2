import * as THREE from "three";

export default function convertToBasicMaterials(materials) {
        const newMaterials = {};
    
        Object.keys(materials).forEach((key) => {
            const oldMaterial = materials[key];
            if (oldMaterial instanceof THREE.MeshStandardMaterial) {
                const newMaterial = convertToBasicMaterial(oldMaterial);
                newMaterials[key] = newMaterial;
            } else {
                newMaterials[key] = oldMaterial;
            }
        });
    
        return newMaterials;
    }

export function convertToBasicMaterial(standardMaterial) {
    if (!(standardMaterial instanceof THREE.MeshStandardMaterial)) {
      console.warn('Materijal nije MeshStandardMaterial');
      return null;
    }
  
    const basicMaterial = new THREE.MeshBasicMaterial({
      color: standardMaterial.color,
      map: standardMaterial.map,
      alphaMap: standardMaterial.alphaMap,
      aoMap: standardMaterial.aoMap,
      aoMapIntensity: standardMaterial.aoMapIntensity,
      envMap: standardMaterial.envMap,
      lightMap: standardMaterial.lightMap,
      lightMapIntensity: standardMaterial.lightMapIntensity,
      specularMap: standardMaterial.specularMap,
      transparent: standardMaterial.transparent,
      opacity: standardMaterial.opacity,
      side: standardMaterial.side,
      depthTest: standardMaterial.depthTest,
      depthWrite: standardMaterial.depthWrite,
      wireframe: standardMaterial.wireframe,
    });
  
    return basicMaterial;
  }