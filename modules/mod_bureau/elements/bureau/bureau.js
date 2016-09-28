
// Ajout d'un nouveau membre
function add() {

    var staff = document.getElementById("staff")

    // Récupération de l'ID
    var newContentId = 1
    if(staff.childElementCount != 0) {
        newContentId = parseInt(staff.lastChild.id.split("-")[1]) + 1
    }

    staff.innerHTML += oneMember(newContentId);
}

// Sauvegarde du contenu de l'équipe au format JSON
function save() {
    // Génération du JSON
    var json = '{"staff": [';

    var childs = document.getElementById("staff").getElementsByTagName('div');
    for(i=0;i<childs.length;i++) {
        var childId = childs[i].id.split("-")[1];

        // Récupération des attributs d'un membre
        var nom = document.getElementById("nom-"+childId).value;
        var prenom = document.getElementById("prenom-"+childId).value;

        // JSON pour le membre
        json += '{"nom":"'+nom+'", "prenom":"'+prenom+'"}';
        if(i != (childs.length - 1)) {
            json += ',';
        }
    }

    json += ']}'

    // Placement dans le champ caché
    document.getElementById("jform_params_sauvegarde").value = json;
}

// Suppression d'un membre de l'équipe
function remove(id) {
    var toDelete = document.getElementById("membre-"+id);
    toDelete.parentNode.removeChild(toDelete);
}

// Génération du HTML nécessaire pour un membre
function oneMember(newContentId) {
    var html = '<div id="membre-' + newContentId + '">'
     + '<label>Nom : </label><input id="nom-'+newContentId+'" type="text" />'
     + '<label>Prénom : </label><input id="prenom-'+newContentId+'" type="text" /><br/>'
     + '<button class="btn btn-danger" onclick="remove('+newContentId+')">Supprimer ce membre</button>'
     + '</div>';
    return html;
}