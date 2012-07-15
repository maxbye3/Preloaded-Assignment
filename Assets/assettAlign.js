var hit : RaycastHit;
    var down = Vector3(0,-1, 0);

if (Physics.Raycast (transform.position, down, hit)) {
    var distanceToGround = hit.distance;
    var currentPos = transform.position;
    var newY = currentPos.y-distanceToGround;
    transform.position = Vector3(currentPos.x, newY, currentPos.z);
}


//218
//18
//-3