// Open and Close Modal
function openCreateRoleModal() {
    document.getElementById('role-modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('role-modal').style.display = 'none';
  }
  
  // Dynamic Role Table
  const roles = [
    { name: 'Admin', belongsTo: 'Operations', description: 'Manage operations', createdBy: 'John Lane', status: 'Active' },
    { name: 'Staff', belongsTo: 'HR', description: 'HR Management', createdBy: 'Praveen Uppe', status: 'Inactive' },
  ];
  
  function renderRoles() {
    const tableBody = document.getElementById('roles-table-body');
    tableBody.innerHTML = '';
    roles.forEach((role, index) => {
      const row = `
        <tr>
          <td>${role.name}</td>
          <td>${role.belongsTo}</td>
          <td>${role.description}</td>
          <td>${role.createdBy}</td>
          <td>${role.status}</td>
          <td>
            <button class="btn btn-blue" onclick="editRole(${index})">Edit</button>
            <button class="btn btn-red" onclick="deleteRole(${index})">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
  function editRole(index) {
    alert(`Edit role: ${roles[index].name}`);
  }
  
  function deleteRole(index) {
    roles.splice(index, 1);
    renderRoles();
  }
  
  // Initialize Table
  renderRoles();
  