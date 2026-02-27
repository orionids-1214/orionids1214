{ pkgs, ... }: {
  # Let Nix know to install NodeJS
  packages = [ pkgs.nodejs ];
  # The following is a sample of how to configure your IDE.
  # For more options, see https://developer.hashicorp.com/waypoint/docs/waypoint-hcl/ide
  # ide = {
  #   previews = [
  #     {
  #       # The name of this preview
  #       name = "Web";
  #       # The command to run to start your app
  #       command = ["npm", "run", "dev"];
  #       # The port your app will be listening on
  #       port = 3000;
  #     }
  #   ];
  # };
}
