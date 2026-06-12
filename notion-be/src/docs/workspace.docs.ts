/**
 * @swagger
 * tags:
 *   name: Workspaces
 *   description: Workspace management
 */

/**
 * @swagger
 * /workspaces:
 *   post:
 *     summary: Create a new workspace
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWorkspace'
 *           example:
 *             name: "My Workspace"
 *     responses:
 *       201:
 *         description: Workspace created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Create workspace success"
 *                 data:
 *                   $ref: '#/components/schemas/Workspace'
 *       400:
 *         description: Workspace with same name already exists
 *       401:
 *         description: Unauthorized
 *
 *   get:
 *     summary: Get all workspaces of current user
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of workspaces
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Workspace'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /workspaces/{id}:
 *   get:
 *     summary: Get workspace by ID
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Workspace ID
 *     responses:
 *       200:
 *         description: Workspace details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Workspace'
 *       404:
 *         description: Workspace not found
 *       401:
 *         description: Unauthorized
 *
 *   put:
 *     summary: Update workspace
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Workspace ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *           example:
 *             name: "Updated Workspace Name"
 *     responses:
 *       200:
 *         description: Workspace updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Workspace'
 *       404:
 *         description: Workspace not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /workspaces/{id}/members:
 *   get:
 *     summary: Get all members in a workspace
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Workspace member list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/WorkspaceMember'
 *       403:
 *         description: Access denied
 *       404:
 *         description: Workspace not found
 */

/**
 * @swagger
 * /workspaces/{id}/invite:
 *   post:
 *     summary: Invite a user to a workspace
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InviteWorkspaceMember'
 *     responses:
 *       201:
 *         description: Member invited successfully
 *       400:
 *         description: Invalid role assignment
 *       403:
 *         description: Only workspace owner can invite members
 *       404:
 *         description: Workspace or user not found
 *       409:
 *         description: User is already a member of the workspace
 */

/**
 * @swagger
 * /workspaces/{id}/members/{userId}:
 *   delete:
 *     summary: Remove a member from a workspace
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Member removed successfully
 *       400:
 *         description: OWNER member cannot be removed
 *       403:
 *         description: Only workspace owner can remove members
 *       404:
 *         description: Workspace or member not found
 */

/**
 * @swagger
 * /workspaces/{id}/members/{userId}/role:
 *   patch:
 *     summary: Update a workspace member role
 *     tags: [Workspaces]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateWorkspaceMemberRole'
 *     responses:
 *       200:
 *         description: Member role updated successfully
 *       400:
 *         description: Invalid role assignment or OWNER role modification
 *       403:
 *         description: Only workspace owner can change roles
 *       404:
 *         description: Workspace or member not found
 */
