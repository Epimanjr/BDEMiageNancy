
// Ajout d'un nouveau membre
function add() {
    // Sauvegarde temporaire
    var fieldname = "sauvegardetmp";
    save(fieldname);

    // Recharge à partir de la sauvegarde temporaire
    recharger(fieldname, true);
}

// Sauvegarde du contenu de l'équipe au format JSON
function save(field) {
    // Génération du JSON
    var json = generateJSON();

    // Placement dans le champ caché
    document.getElementById("jform_params_"+field).value = json;
}

function recharger(field, newMember) {
    var json = document.getElementById("jform_params_"+field).value;
    var obj = JSON.parse(json).staff;

    var staff = document.getElementById("staff");
    staff.innerHTML = "";
    for(i=0;i<obj.length;i++) {
        staff.innerHTML += oneMember(obj[i].id);
    }

    if(newMember) {
        // Récupération de l'ID
        var newContentId = 1
        if(staff.childElementCount != 0) {
            newContentId = parseInt(staff.lastChild.id.split("-")[1]) + 1
        }
        
        staff.innerHTML += oneMember(newContentId);
    }
    for(i=0;i<obj.length;i++) {
        var id = obj[i].id;
        
        document.getElementById("nom-"+id).value = obj[i].nom;
        document.getElementById("prenom-"+id).value = obj[i].prenom;
        document.getElementById("fonction-"+id).value = obj[i].fonction;
        document.getElementById("email-"+id).value = obj[i].email;
    }
}

// Génénration du JSON à partir des données saisies par l'administrateur
function generateJSON() {
    var json = '{"staff": [';

    var childs = document.getElementById("staff").getElementsByTagName('div');
    for(i=0;i<childs.length;i++) {
        var childId = childs[i].id.split("-")[1];

        // Récupération des attributs d'un membre
        var nom = document.getElementById("nom-"+childId).value;
        var prenom = document.getElementById("prenom-"+childId).value;
        var fonction = document.getElementById("fonction-"+childId).value;
        var email = document.getElementById("email-"+childId).value;

        // JSON pour le membre
        json += '{"id":"'+childId+'", "nom":"'+nom+'", "prenom":"'+prenom+'", "fonction":"'+fonction+'", "email":"'+email+'"}';
        if(i != (childs.length - 1)) {
            json += ',';
        }
    }

    json += ']}'
    return json;
}

// Suppression d'un membre de l'équipe
function remove(id) {
    var toDelete = document.getElementById("membre-"+id);
    toDelete.parentNode.removeChild(toDelete);
}

// Génération du HTML nécessaire pour un membre
function oneMember(newContentId) {
    var html = '<div id="membre-' + newContentId + '">'
     + '<fieldset>'
     + '<label>Nom : </label><input id="nom-'+newContentId+'" type="text" />'
     + '<label>Prénom : </label><input id="prenom-'+newContentId+'" type="text" /><br/>'
     + '<label>Fonction : </label><input id="fonction-'+newContentId+'" type="text" />'
     + '<label>Adresse email : </label><input id="email-'+newContentId+'" type="email" /><br/>'
     + '<button class="btn btn-danger" onclick="remove('+newContentId+')">Supprimer ce membre</button>'
     + '</fieldset>'
     + '</div>';
    return html;
}