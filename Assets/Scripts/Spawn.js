var Building1 : GameObject;
var Building2 : GameObject; 
var Building3 : GameObject;
var offset = 0.75;
private var prefab : GameObject;
private var prefabs = new Array ();

function Update()
{
	spawn();	
}

function spawn()
{

	var mesh : Mesh = GetComponent(MeshFilter).mesh;

	
	var vertices = mesh.vertices;
	
	for (var i=0;i<vertices.length;i++)
	{
		var spawnPoint = transform.TransformPoint(vertices[i]);
		
		var q = Random.Range (0, vertices.length);
		spawnPoint = transform.TransformPoint(vertices[q]);

		pOneSpawn = Random.Range(0, 5);
		if (prefabs.length <= pOneSpawn)
		{
			prefab = Instantiate (Building1, spawnPoint, transform.rotation );
			prefab.transform.rotation = Quaternion.FromToRotation(Vector3.down, transform.forward);
			prefab = Instantiate (Building2, spawnPoint, transform.rotation);
			prefab.transform.rotation = Quaternion.FromToRotation(Vector3.down, transform.forward);
			prefab = Instantiate (Building3, spawnPoint, transform.rotation);
			prefab.transform.rotation = Quaternion.FromToRotation(Vector3.down, transform.forward);
			prefab.renderer.enabled = true;
			prefabs.Push(prefab);
		}
	}
	renderer.enabled = true;
}