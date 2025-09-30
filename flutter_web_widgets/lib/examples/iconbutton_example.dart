import 'package:flutter/material.dart';

class IconButtonExample extends StatelessWidget {
  const IconButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: IconButton(
        icon: const Icon(Icons.thumb_up),
        onPressed: () {},
        tooltip: 'Like',
        iconSize: 48.0,
        color: Colors.blue,
      ),
    );
  }
}
