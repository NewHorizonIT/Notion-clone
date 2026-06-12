import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notion Clone API",
      version: "1.0.0",
      description: "API documentation for Notion Clone application",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: "http://localhost:8081/api/v1",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        apiKey: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
      schemas: {
        // User schemas
        User: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            username: { type: "string" },
            email: { type: "string", format: "email" },
            isActive: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        UserRegister: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", minLength: 2, maxLength: 100 },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
          },
        },
        UserLogin: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            token: {
              type: "object",
              properties: {
                accessToken: { type: "string" },
                refreshToken: { type: "string" },
              },
            },
            user: { $ref: "#/components/schemas/User" },
          },
        },

        // Workspace schemas
        Workspace: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            slug: { type: "string" },
            ownerId: { type: "string", format: "uuid" },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        WorkspaceMemberUser: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            username: { type: "string" },
            email: { type: "string", format: "email" },
            isActive: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        WorkspaceMember: {
          type: "object",
          properties: {
            id: { type: "string" },
            workspaceId: { type: "string", format: "uuid" },
            userId: { type: "string", format: "uuid" },
            roleId: {
              type: "string",
              enum: ["OWNER", "ADMIN", "MEMBER"],
            },
            createdAt: { type: "string", format: "date-time" },
            members: { $ref: "#/components/schemas/WorkspaceMemberUser" },
          },
        },
        InviteWorkspaceMember: {
          type: "object",
          required: ["userId"],
          properties: {
            userId: { type: "string", format: "uuid" },
            role: {
              type: "string",
              enum: ["OWNER", "ADMIN", "MEMBER"],
              default: "MEMBER",
            },
          },
        },
        UpdateWorkspaceMemberRole: {
          type: "object",
          required: ["role"],
          properties: {
            role: {
              type: "string",
              enum: ["OWNER", "ADMIN", "MEMBER"],
            },
          },
        },
        CreateWorkspace: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string", minLength: 1, maxLength: 100 },
          },
        },

        // Page schemas
        Page: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            description: { type: "string" },
            userId: { type: "string", format: "uuid" },
            workspaceId: { type: "string", format: "uuid" },
            isDeleted: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        CreatePage: {
          type: "object",
          required: ["workspaceId"],
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            workspaceId: { type: "string", format: "uuid" },
          },
        },
        UpdatePage: {
          type: "object",
          properties: {
            title: { type: "string" },
            description: { type: "string" },
          },
        },

        // Block schemas
        Block: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            pageId: { type: "string", format: "uuid" },
            parentId: { type: "string", format: "uuid", nullable: true },
            type: { type: "string" },
            content: { type: "object" },
            orderIndex: { type: "integer" },
            isDeleted: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        CreateBlock: {
          type: "object",
          required: ["pageId", "type", "orderIndex"],
          properties: {
            pageId: { type: "string", format: "uuid" },
            parentId: { type: "string", format: "uuid", nullable: true },
            type: {
              type: "string",
              enum: [
                "paragraph",
                "heading",
                "bulletedListItem",
                "numberedListItem",
                "checkListItem",
                "codeBlock",
                "image",
                "table",
              ],
            },
            content: { type: "object" },
            orderIndex: { type: "integer" },
          },
        },
        UpdateBlock: {
          type: "object",
          properties: {
            type: { type: "string" },
            content: { type: "object" },
            orderIndex: { type: "integer" },
          },
        },

        // Common response schemas
        SuccessResponse: {
          type: "object",
          properties: {
            statusCode: { type: "integer" },
            message: { type: "string" },
            data: { type: "object" },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            statusCode: { type: "integer" },
            message: { type: "string" },
            error: { type: "string" },
          },
        },
      },
    },
    security: [
      {
        apiKey: [],
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/docs/*.ts"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
