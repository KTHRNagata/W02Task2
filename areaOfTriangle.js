function AreaOfTriangle()
{
    var a = [v1.x - v0.x,v1.y - v0.y,v1.z - v0.z];
    var b = [v2.x - v0.x,v2.y - v0.y,v2.z - v0.z];
    var S = Math.abs((a[1]*b[2]-a[2]*b[1])**2 + (a[2]*b[0]-a[0]*b[2])**2 + (a[0]*b[1]-a[1]*b[0])**2)/2;
    return S;
}
