/**
 * @swagger
 * tags:
 *   name: Pages
 *   description: Page management
 */

/**
 * @swagger
 * /pages:
 *   post:
 *     summary: Create a new page
 *     tags: [Pages]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePage'
 *           example:
 *             title: "My New Page"
 *             description: "Page description"
 *             workspaceId: "550e8400-e29b-41d4-a716-446655440000"
 *     responses:
 *       201:
 *         description: Page created successfully
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
 *                 data:
 *                   $ref: '#/components/schemas/Page'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/search:
 *   get:
 *     summary: Search pages by title
 *     tags: [Pages]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for page title
 *     responses:
 *       200:
 *         description: List of matching pages
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
 *                     $ref: '#/components/schemas/Page'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/workspace/{workspaceId}:
 *   get:
 *     summary: Get all pages in a workspace
 *     tags: [Pages]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Workspace ID
 *     responses:
 *       200:
 *         description: List of pages in workspace
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
 *                     $ref: '#/components/schemas/Page'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/workspaces/{workspaceId}/trash:
 *   get:
 *     summary: Get trashed pages in a workspace
 *     tags: [Pages]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Workspace ID
 *     responses:
 *       200:
 *         description: List of trashed pages
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
 *                     $ref: '#/components/schemas/Page'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/{id}:
 *   get:
 *     summary: Get page by ID
 *     tags: [Pages]
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
 *         description: Page ID
 *     responses:
 *       200:
 *         description: Page details
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
 *                   $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 *
 *   put:
 *     summary: Update page
 *     tags: [Pages]
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
 *         description: Page ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePage'
 *           example:
 *             title: "Updated Page Title"
 *             description: "Updated description"
 *     responses:
 *       200:
 *         description: Page updated successfully
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
 *                   $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 *
 *   delete:
 *     summary: Soft delete page (move to trash)
 *     tags: [Pages]
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
 *         description: Page ID
 *     responses:
 *       200:
 *         description: Page moved to trash
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
 *                   $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/{id}/restore:
 *   patch:
 *     summary: Restore page from trash
 *     tags: [Pages]
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
 *         description: Page ID
 *     responses:
 *       200:
 *         description: Page restored successfully
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
 *                   $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /pages/{id}/hard:
 *   delete:
 *     summary: Permanently delete page
 *     tags: [Pages]
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
 *         description: Page ID
 *     responses:
 *       200:
 *         description: Page permanently deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 */
